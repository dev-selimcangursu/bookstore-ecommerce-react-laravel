<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('image')->nullable();
            $table->string('name');
            $table->integer('publishing_house_id');
            $table->integer('author_id');
            $table->string('old_price');
            $table->string('price');
            $table->string('stock');
            $table->integer('category_id');
            $table->integer('subcategory_id');
            $table->string('ısbn');
            $table->string('pages_number');
            $table->text('description');
            $table->boolean('best_seller_status_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
