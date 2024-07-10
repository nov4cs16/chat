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
use App\Models\Subforum;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Forum extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function subforums(): HasMany
    {
        return $this->hasMany(Subforum::class);
    }
}
