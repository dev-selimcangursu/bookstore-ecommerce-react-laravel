<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    // En Çok Satan Kitaplar
    public function bestSeller()
    {
        $bestSellerBooks = Book::join('publishing_houses', 'publishing_houses.id', '=', 'books.publishing_house_id')
            ->join('authors','authors.id','=','books.author_id')
            ->select('books.*', 'publishing_houses.name as publishingName','authors.first_name as authorName')
            ->where('books.best_seller_status_id', 1)
            ->get();

        return response()->json(['bestSellerBook' => $bestSellerBooks]);
    }
}
