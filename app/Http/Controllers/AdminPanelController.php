<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Subforum;
use App\Models\Forum;

class AdminPanelController extends Controller
{
    public function index()
    {
        return Inertia::render('AdminPanel',[
            'name'=>'index'
        ]);
    }
    public function index_forums()
    {
        $forums = Forum::with('subforums')->get();

        return Inertia::render('AdminPanel',[
            'data'=>$forums,
            'entityName' => 'forums' 
        ]);
    }
    public function index_subforums()
    {
        // Obtener todos los subforos con sus respectivos foros asociados
        $subforums = Subforum::with('forum')->get();
        
        // Obtener todos los foros
        $forums = Forum::all();
        
        return Inertia::render('AdminPanel', [
            'forums' => $forums,
            'data' => $subforums,
            'entityName' => 'subforums'
        ]);
    }
    

}