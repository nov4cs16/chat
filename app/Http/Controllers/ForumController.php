<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Forum;
use App\Models\Subforum;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ForumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $forums = Forum::with('subforums')->get();
        return response()->json($forums);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('AdminPanel', [
            'status' => session('status'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:forums',
            'description' => 'required'
        ]);

        $forumData = [
            'name' => $request->name,
            'description' => $request->description
        ];

        $forum = Forum::create($forumData);


        $forums = Forum::with('subforums')->get();
        return Inertia::render('AdminPanel', [
            'data' => $forums,
            'entityName' => 'forums'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $forum = Forum::with('subforums')->findOrFail($id);
        $forum->subforums->each(function ($subforum) {
            $subforum->type = 'link';
        });

        return Inertia::render('Subforum', [
            'data' => $forum->subforums,
            'forum_name' => $forum->name,
            'entityName' => 'subforums' 
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // No se suele implementar en APIs RESTful
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|unique:forums,name,' . $id,
            'description' => 'required'
        ]);

        $forum = Forum::findOrFail($id);
        $forum->update($request->all());
        $forums = Forum::with('subforums')->get();
        return Inertia::render('AdminPanel', [
            'data' => $forums,
            'entityName' => 'forums'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $forum = Forum::findOrFail($id);
        $forum->delete();
        $forums = Forum::with('subforums')->get();
        return Inertia::render('AdminPanel', [
            'data' => $forums,
            'entityName' => 'forums' 
        ]);;
    }
}
