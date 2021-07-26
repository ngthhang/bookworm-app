<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\DB;

class Review extends Model
{
  use HasFactory;

  const CREATED_AT = 'review_date';
  const UPDATED_AT = 'review_date';

  protected $fillable = ['book_id', 'review_title', 'review_details', 'rating_start'];

  public function book()
  {
    return $this->belongsTo(Book::class);
  }

  public function scopeCountRate($query, $rating)
  {
    return $query->addSelect(DB::raw('SUM(CASE WHEN CAST(rating_start as decimal) = ' . $rating . ' then 1 else 0 end) as rate_' . $rating));
  }
}
