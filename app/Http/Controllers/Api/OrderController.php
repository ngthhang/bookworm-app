<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Book;
use App\Models\OrderItem;
use Illuminate\Support\Facades\DB;


class OrderController extends Controller
{

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $data = $request->all();

    $order_list_item = $request->input('order_list_item');
    $order_amount = $request->input('order_amount');

    $createOrder = DB::transaction(function () use ($order_list_item, $order_amount) {
      foreach ($order_list_item as $book) {
        $order_books[] = [
          'book_id' => $book['book_id'],
          'price' => $book['final_price'],
          'quantity' => $book['quantity']
        ];
      }

      $order = Order::create([
        'order_amount' => $order_amount
      ]);

      $order->order_items()->createMany($order_books);

      return $order;
    });

    return response($createOrder, 201);
  }
}
