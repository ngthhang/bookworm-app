<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;

use App\Models\Review;

class ReviewController extends Controller
{

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)

  {
    $validation = Validator::make($request->all(), [
      'book_id' => 'required',
      'review_title'   => 'required|string|max:120',
      'review_details' => 'nullable|string',
      'rating_start'   => [
        'required',
        Rule::in([1, 2, 3, 4, 5]),
      ],
    ]);

    if ($validation->fails()) {
      return response($validation->getMessageBag(), 400);
    }

    $review = Review::create($request->all());

    return response($review, 201);
  }
}
