<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('my-channel', function ($user) {
    return true; // Aquí puedes definir la lógica para autorizar el acceso al canal
});

Broadcast::channel('chat', function ($user, $id) {
    return true; 
});