<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class ForumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('forums')->insert([
            [
                'name' => 'General Discussion',
                'description' => 'A place for general discussion.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'News and Announcements',
                'description' => 'Latest news and announcements.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Support',
                'description' => 'Get help and support here.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
