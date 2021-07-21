<?php

use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\AuthorController;
use App\Http\Controllers\Api\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

Route::apiResources([
  'books' => BookController::class,
  'authors' => AuthorController::class,
  'categories' => CategoryController::class,
]);

Route::prefix('home')->group(function () {
  Route::get('/on-sale', [HomeController::class, 'getBooksOnSale']);
  Route::get('/recommended', [HomeController::class, 'getBooksRecommended']);
  Route::get('/popular', [HomeController::class, 'getBooksPopular']);
});

Route::prefix('product')->group(function () {
  Route::get('/{id}', [ProductController::class, 'show']);
});
