<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Book extends Model
{
  use HasFactory;

  public $timestamps = false;

  public function author()
  {
    return $this->belongsTo(Author::class);
  }

  public function category()
  {
    return $this->belongsTo(Category::class);
  }

  public function reviews()
  {
    return $this->hasMany(Review::class);
  }

  public function discounts()
  {
    return $this->hasMany(Discount::class);
  }

  public function scopeJoinDiscount($query, $typeJoin)
  {
    if ($typeJoin === 'inner') {
      return $query->join('discounts', 'discounts.book_id', '=', 'books.id');
    }
    return $query->leftJoin('discounts', 'discounts.book_id', '=', 'books.id');
  }

  public function scopeJoinAuthor($query)
  {
    return $query->join('authors', 'authors.id', '=', 'books.author_id');
  }

  public function scopeJoinReviews($query)
  {
    return $query->join('reviews', 'reviews.book_id', '=', 'books.id');
  }

  public function scopeGetFinalPrice($query)
  {
    return $query->addSelect(DB::raw("(CASE WHEN discount_price IS NULL THEN book_price ELSE discount_price END) as final_price"));
  }

  public function scopeGetSubPrice($query)
  {
    return $query->addSelect(DB::raw('book_price - discount_price as sub_price'));
  }

  public function scopeSelectInfoCardBook($query)
  {
    return $query->select(
      'books.id',
      'books.book_price',
      'books.book_title',
      'books.book_cover_photo',
      'discounts.discount_price',
      'authors.author_name'
    );
  }

  public function scopeGetAvailableDiscount($query)
  {
    return $query->whereDate('discount_start_date', '<=', now())
      ->where(function ($query) {
        $query->whereDate('discount_end_date', '>', now())
          ->orWhereNull('discount_end_date');
      });
  }

  public function scopeGetTotalReviews($query)
  {
    return $query->addSelect(DB::raw('COUNT(reviews.id) as total_reviews'));
  }

  public function scopeGetAvgRating($query)
  {
    return $query->addSelect(DB::raw('ROUND(SUM(CAST(rating_start AS decimal))/COUNT(reviews.id), 2) AS avg_rating'));
  }

  public function scopeGetBooksOnSale($query)
  {
    return $query->joinDiscount('inner')
      ->getAvailableDiscount()
      ->joinAuthor()
      ->selectInfoCardBook()
      ->getSubPrice()
      ->orderBy('sub_price', 'desc')
      ->limit(10);
  }

  public function scopeGetBooksRecommended($query)
  {
    return $query->joinDiscount('left')
      ->getAvailableDiscount()
      ->joinReviews()
      ->joinAuthor()
      ->selectInfoCardBook()
      ->getAvgRating()
      ->orderBy('avg_rating', 'desc')
      ->groupBy('books.id', 'authors.author_name', 'discounts.discount_price')
      ->limit(8);
  }

  public function scopeGetBooksPopular($query)
  {
    return $query->joinDiscount('left')
      ->getAvailableDiscount()
      ->joinAuthor()
      ->joinReviews()
      ->selectInfoCardBook()
      ->getTotalReviews()
      ->getFinalPrice()
      ->orderBy('total_reviews', 'desc')
      ->orderBy('final_price', 'asc')
      ->groupBy('books.id', 'authors.author_name', 'discounts.discount_price')
      ->limit(8);
  }
}
