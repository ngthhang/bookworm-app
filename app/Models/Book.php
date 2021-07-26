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
    return $this->hasMany(Discount::class)->getDiscount();
  }

  public function scopeJoinAuthor($query)
  {
    return $query->join('authors', 'authors.id', '=', 'books.author_id');
  }

  public function scopeJoinReviews($query)
  {
    return $query->leftJoin('reviews', 'reviews.book_id', '=', 'books.id');
  }

  public function scopeGetFinalPrice($query)
  {
    return $query->addSelect(DB::raw("(CASE WHEN discount_price IS NULL THEN book_price ELSE discount_price END) as final_price"));
  }

  public function scopeGetSubPrice($query)
  {
    return $query->addSelect(DB::raw('(CASE WHEN discount_price IS NULL THEN 0 ELSE book_price - discount_price END) as sub_price'));
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
        $query->whereDate('discount_end_date', '>=', now())
          ->orWhereNull('discount_end_date');
      });
  }

  public function scopeGetTotalReviews($query)
  {
    return $query->addSelect(DB::raw('COUNT(reviews.id) as total_reviews'));
  }

  public function scopeGetAvgRating($query)
  {
    return $query->addSelect(DB::raw('(CASE WHEN COUNT(reviews.id) = 0 THEN 0 ELSE ROUND(SUM(CAST(rating_start as decimal))/COUNT(reviews.id), 2) END) as avg_rating'));
  }

  public function scopeGetBooksWithRatingFilter($query, $rating)
  {
    $query->having(DB::raw('ROUND(SUM(CAST(rating_start as decimal))/COUNT(reviews.id), 2)'), '>=', $rating);
  }

  public function scopeJoinDiscount($query, $type)
  {
    if ($type === 'inner') {
      return $query->join('discounts', function ($join) {
        $join->on('books.id', '=', 'discounts.book_id')
          ->whereDate('discount_start_date', '<=', now())
          ->where(function ($query) {
            $query->whereDate('discount_end_date', '>=', now())
              ->orWhereNull('discount_end_date');
          });
      });
    } else {
      return $query->leftJoin('discounts', function ($join) {
        $join->on('books.id', '=', 'discounts.book_id')
          ->whereDate('discount_start_date', '<=', now())
          ->where(function ($query) {
            $query->whereDate('discount_end_date', '>=', now())
              ->orWhereNull('discount_end_date');
          });
      });
    }
  }

  public function scopeGetBooksOnSale($query, $typeJoin)
  {
    return $query->joinDiscount($typeJoin)
      ->joinAuthor()
      ->joinReviews()
      ->selectInfoCardBook()
      ->getFinalPrice()
      ->getSubPrice()
      ->groupBy("books.id", "discounts.discount_price", "authors.author_name")
      ->orderBy('sub_price', 'desc');
  }

  public function scopeGetBooksRecommended($query, $typeJoin)
  {
    return $query->joinDiscount($typeJoin)
      ->joinReviews()
      ->joinAuthor()
      ->selectInfoCardBook()
      ->getFinalPrice()
      ->getAvgRating()
      ->orderBy('avg_rating', 'desc')
      ->orderBy('final_price', 'asc')
      ->groupBy('books.id', 'authors.author_name', 'discounts.discount_price');
  }

  public function scopeGetBooksPopular($query, $typeJoin)
  {
    return $query->joinDiscount($typeJoin)
      ->joinAuthor()
      ->joinReviews()
      ->selectInfoCardBook()
      ->getTotalReviews()
      ->getFinalPrice()
      ->orderBy('total_reviews', 'desc')
      ->orderBy('final_price', 'asc')
      ->groupBy('books.id', 'authors.author_name', 'discounts.discount_price');
  }

  public function scopeGetBooks($query)
  {
    return $query->joinDiscount('left')
      ->joinAuthor()
      ->joinReviews()
      ->selectInfoCardBook()
      ->getFinalPrice()
      ->groupBy('books.id', 'authors.author_name', 'discounts.discount_price');
  }
}
