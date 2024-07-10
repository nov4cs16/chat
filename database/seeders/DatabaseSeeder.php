<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

     /*   User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);*/

        //php artisan migrate --seed
        //php artisan migrate --seed
        $this->call([
            RolesTableSeeder::class,
            UsersTableSeeder::class,
            ForumSeeder::class,
        ]);
    }
}
