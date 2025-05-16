<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function category()
    {
        $categories = Categories::where('is_active', 1)
            ->whereNull('parent_category_id')
            ->get();

        return response()->json(['categories' => $categories]);
    }

    public function subcategories()
    {
        $subcategories = Categories::where('is_active',1)->whereNotNull('parent_category_id')->get();

        return response()->json(['subcategories' => $subcategories]);
    }
}
