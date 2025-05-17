<?php

use App\Http\Controllers\BooksController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

Route::get('/get/categories',[CategoryController::class,'category']);
Route::get('/get/subcategories',[CategoryController::class,'subcategories']);
Route::get('/get/best-seller-books',[BooksController::class,'bestSeller']);