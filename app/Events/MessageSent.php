<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

namespace App\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class MessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $userName;
    public $message;

    public function __construct($userName, $message)
    {
        $this->userName = $userName;
        $this->message = $message;
    }



    public function broadcastOn()
    {
        return ['chat'];
    }


    public function broadcastAs()
    {
        return 'my-message';
    }
}
