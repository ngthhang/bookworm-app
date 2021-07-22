<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
  use HasFactory;

  public $timestamps = false;

  public function book()
  {
    return $this->belongsTo(Book::class);
  }

  public function scopeGetDiscount($query)
  {
    return $query->where('discount_start_date', '<=', now())
      ->where(function ($query) {
        $query->where('discount_end_date', '>', now())
          ->orWhereNull('discount_end_date');
      });
  }
}
