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
        Schema::create('publishing_houses', function (Blueprint $table) {
            $table->id();
            $table->string('name');                 // Yayınevi adı
            $table->string('slug')->unique();       // URL dostu isim
            $table->string('email')->nullable();    // E-posta (varsa)
            $table->string('phone')->nullable();    // Telefon numarası
            $table->string('website')->nullable();  // Web sitesi adresi
            $table->string('address')->nullable();  // Adres (isteğe bağlı)
            $table->text('description')->nullable(); // Açıklama (isteğe bağlı)
            $table->timestamps();                   // created_at, updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('publishing_houses');
    }
};
