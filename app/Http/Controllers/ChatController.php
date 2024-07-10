<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\MessageSent;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChatController extends Controller
{

    public function sendMessageEvent(Request $request)
    {
        $user = Auth::user(); 
        $message = $request->input('message');
        event(new MessageSent($user->name, $message));

        return Inertia::render('Welcome', [
            'message' => 'Message sent',
        ]);
    }
}
