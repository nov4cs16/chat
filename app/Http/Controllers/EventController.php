<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\MyEvent;
use Illuminate\Support\Facades\Event;

class EventController extends Controller
{
    public function triggerEvent()
    {
        
        Event::dispatch(new MyEvent('Hello from Laravel!'));
        return "Event dispatched!";
    }
}
