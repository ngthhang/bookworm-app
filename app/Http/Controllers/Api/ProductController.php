<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Book;

class ProductController extends Controller
{
  public function show($id)
  {
    $book = Book::with('author', 'reviews', 'discounts', 'category')->findOrFail($id);
    return $book;
  }
}
