<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;


class HomeController extends Controller
{
  public function getBooksOnSale()
  {
    return Book::getBooksOnSale()->get();
  }

  public function getBooksRecommended()
  {
    return Book::getBooksRecommended()->get();
  }

  public function getBooksPopular()
  {
    return Book::getBooksPopular()->get();
  }
}
