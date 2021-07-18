<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\DB;

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

  public function currentDiscount()
  {
    return $this->hasOne(Discount::class, 'book_id', 'id')
      ->select('discount_price')
      ->where('discount_start_date', '<=', now())
      ->where(function ($query) {
        $query->where('discount_end_date', '>', now())
          ->orWhereNull('discount_end_date');
      });
  }
}

// select *.book, *.author, discount_price, book_price, subPrice from book
// join discount on book.id = discount.book_id
// join author on book.author_id = author.id
// orderBy(subPrice) DESC
// top 10
