<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('body');
            $table->foreignId('subforum_id')->constrained('subforums')->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Add this line
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
