<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        RateLimiter::for('global', function (Request $request) {
            return Limit::perHour(500)->response(function (Request $request, array $headers) {
                return response('El servidor solo acepta 1000 peticiones por hora', 429, $headers);
            });
        });


        RateLimiter::for('register', function (Request $request) {
            return Limit::perHour(5)->response(function (Request $request, array $headers) {
                return response('El servidor solo acepta 5 registros por hora', 429, $headers);
            });
        });
    }
}
