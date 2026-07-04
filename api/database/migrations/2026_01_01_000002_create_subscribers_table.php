<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('subscribers', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('email');
            $table->string('message')->nullable();
            $table->string('source')->default('newsletter'); // newsletter | contact
            $table->timestamps();

            $table->unique(['email', 'source']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subscribers');
    }
};
