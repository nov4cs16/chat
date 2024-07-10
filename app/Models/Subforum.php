<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Forum;
use App\Models\Post;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subforum extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description','forum_id'];

    public function forum(): BelongsTo
    {
        return $this->belongsTo(Forum::class);
    }

   
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

}
