<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminPanelController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'entityName' => 'forums'
    ]);
})->name('home')->middleware('throttle:global');

Route::get('/chat', function () {
    $user = Auth::user();
    return Inertia::render('Chat', [
        'user' => $user
    ]);
})->name('chat')->middleware('throttle:global');

Route::post('/send_message', [ChatController::class, 'sendMessageEvent'])->middleware(['auth', 'verified']);

// Dashboard Route
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard')->middleware('throttle:global');

// Static Pages Routes
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact')->middleware('throttle:global');

Route::get('/contacto', function () {
    return Inertia::render('Contacto');
})->name('contacto')->middleware('throttle:global');


Route::get('/serviceterms', function () {
    return Inertia::render('ServiceTerms');
})->name('serviceterms')->middleware('throttle:global');

Route::middleware(['auth', 'verified'])->group(function () {
    // Admin Panel Routes
    Route::get('/admin_panel', [AdminPanelController::class, 'index'])->name('admin.panel')->middleware('throttle:global');
    Route::get('/admin_panel/forums', [AdminPanelController::class, 'index_forums'])->name('admin.panel.forums')->middleware('throttle:global');
    Route::get('/admin_panel/subforums', [AdminPanelController::class, 'index_subforums'])->name('admin.panel.subforums')->middleware('throttle:global');
});

// Profile Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit')->middleware('throttle:global');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update')->middleware('throttle:global');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy')->middleware('throttle:global');
});

require __DIR__ . '/auth.php';
