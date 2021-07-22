<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\Book;
use App\Models\Review;

class BookController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    $sort_type = $request->has('sort_type') ? $request->query('sort_type') : null;
    $limit = $request->has('limit') ? $request->query('limit') : null;
    $per_page = $request->has('per_page') ? $request->query('per_page') : null;
    $author = $request->has('author') ? $request->query('author') : null;
    $category = $request->has('category') ? $request->query('category') : null;
    $rating = $request->has('rating') ? $request->query('rating') : null;

    switch ($sort_type) {
      case 'SORT_BY_HOME_SALES':
        $books = Book::getBooksOnSale();
        break;
      case 'SORT_BY_RECOMMENDED':
        $books = Book::getBooksRecommended();
        break;
      case 'SORT_BY_POPULAR':
        $books = Book::getBooksPopular();
        break;
      case 'SORT_BY_SALES':
        $books = Book::getBooksOnSale()
          ->getFinalPrice()
          ->orderBy('final_price', 'asc');
        break;
      case 'SORT_BY_LOW_TO_HIGH':
        $books = Book::getBooks()->orderBy('final_price', 'asc');
        break;
      case 'SORT_BY_HIGH_TO_LOW':
        $books = Book::getBooks()->orderBy('final_price', 'desc');
        break;
      default:
        return response('Not exist sort type name: ' . $sort_type, 404);
    }

    if ($author !== null) {
      $books = $books->having('books.author_id', '=', $author);
    }

    if ($category !== null) {
      $books = $books->having('books.category_id', '=', $category);
    }

    if ($rating !== null) {
      $books = $books
        ->getAvgRating()
        ->groupBy('books.id', 'authors.author_name', 'discounts.discount_price')
        ->getBooksWithRatingFilter($rating);
    }
    if ($limit !== null) {
      $books = $books->limit($limit)->get();
    }

    if ($per_page !== null) {
      $books = $books->paginate($per_page ?? 20);
    }

    return $books;
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show(Request $request, $id)
  {
    $sort_type = $request->has('sort') ? $request->query('sort') : null;
    $filter_type = $request->has('filter') ? $request->query('filter') : null;
    $per_page = $request->has('per_page') ? $request->query('per_page') : null;

    $book = Book::with('author', 'discounts', 'category')
      ->findOrFail($id);


    $reviews = Review::where('book_id', '=', $id);
    if ($reviews->count() > 0) {
      switch ($sort_type) {
        case 'NEW_TO_OLD':
          $reviews = $reviews->orderBy('review_date', 'desc');
          break;
        case 'OLD_TO_NEW':
          $reviews = $reviews->orderBy('review_date', 'asc');
          break;
        default:
          $reviews = $reviews->orderBy('review_date', 'asc');
          break;
      }
      $reviews = $filter_type !== null && $filter_type !== 'all' ? $reviews->where('rating_start', '=', strval($filter_type)) : $reviews;
      $reviews = $reviews->paginate($per_page ?? 20);
    }

    return [
      'books' => $book,
      'reviews' => $reviews,
    ];
  }
};
