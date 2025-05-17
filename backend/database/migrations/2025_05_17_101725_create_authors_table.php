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
        Schema::create('authors', function (Blueprint $table) {
            $table->id();                                   // Otomatik ID
            $table->string('first_name');                   // Ad
            $table->string('last_name');                    // Soyad
            $table->string('slug')->unique();               // URL dostu isim
            $table->string('email')->nullable();            // E-posta adresi (isteğe bağlı)
            $table->string('phone')->nullable();            // Telefon (isteğe bağlı)
            $table->date('birth_date')->nullable();         // Doğum tarihi
            $table->string('birth_place')->nullable();      // Doğum yeri
            $table->string('nationality')->nullable();      // Uyruk
            $table->text('biography')->nullable();          // Biyografi
            $table->string('photo')->nullable();            // Profil fotoğrafı yolu (varsa)
            $table->timestamps();                           // created_at, updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('authors');
    }
};
