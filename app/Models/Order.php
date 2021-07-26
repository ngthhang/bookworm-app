<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  use HasFactory;

  const CREATED_AT = 'order_date';
  const UPDATED_AT = 'order_date';

  protected $fillable = ['order_amount'];

  public function order_items()
  {
    return $this->hasMany(OrderItem::class);
  }
}
