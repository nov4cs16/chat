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

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear el usuario admin
        $admin = User::create([
            'name' => 'admin',
            'email' => 'admin_7_91_2@gmail.com',
            'password' => Hash::make('@dm1n1971@'), // Cambia la contraseña por una segura
        ]);

        $adminRole = Role::where('name', 'admin')->first();
        $admin->roles()->attach($adminRole);

        // Crear un usuario regular para pruebas
        $user = User::create([
            'name' => 'Maria',
            'email' => 'maria@gmail.com',
            'password' => Hash::make('maria1234'), // Cambia la contraseña por una segura
        ]);

        $userRole = Role::where('name', 'user')->first();
        $user->roles()->attach($userRole);
    }
}
