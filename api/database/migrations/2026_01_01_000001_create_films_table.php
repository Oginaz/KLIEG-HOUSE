<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('films', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('genre');
            $table->string('logline');
            $table->text('synopsis');
            $table->string('director');
            $table->json('cast');
            $table->dateTime('premiere_at');
            $table->string('premiere_venue')->nullable();
            $table->unsignedSmallInteger('runtime_minutes')->nullable();
            $table->string('poster_path')->nullable();
            $table->string('backdrop_path')->nullable();
            $table->string('trailer_url')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->enum('status', ['announced', 'teaser', 'upcoming', 'premiered'])->default('upcoming');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('films');
    }
};
