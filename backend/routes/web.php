<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

Route::get('/get/categories',[CategoryController::class,'category']);
Route::get('/get/subcategories',[CategoryController::class,'subcategories']);
