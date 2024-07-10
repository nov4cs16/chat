<?php

/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Subforum;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with('user', 'comments')->get();
        return response()->json($posts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'subforum_id' => 'required|exists:subforums,id',
            'user_id' => 'required|exists:users,id',
            'title' => 'required',
            'body' => 'required'
        ]);

        // Crear el subforo con los datos proporcionados en la solicitud
        $post = Post::create([
            'subforum_id' => $request->subforum_id,
            'user_id' => $request->user_id,
            'title' => $request->title,
            'body' => $request->body
        ]);

        $subforum = Subforum::with('posts.user', 'posts.comments')->findOrFail($request->subforum_id);

        $subforum->posts->each(function ($post) {
            $post->type = 'link';
        });

        $posts = $subforum->posts->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'subforum_id' => $post->subforum_id,
                'user_id' => $post->user_id,
                'created_at' => $post->created_at,
                'updated_at' => $post->updated_at,
                'type' => $post->type,
                'replies' => $post->comments->count(),
                'author' => $post->user->name
            ];
        });

        return Inertia::render('Posts', [
            'data' => $posts,
            'subforum_id' => $request->subforum_id,
            'entityName' => 'posts'
        ]);

    }

    /**
     * Display the specified resource.
     */
    
    public function show(string $id)
    {
        $post = Post::with('user', 'comments.user')->findOrFail($id);

        return Inertia::render('Thread', [
            'data' => $post,
            'entityName' => 'comments'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */

    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
