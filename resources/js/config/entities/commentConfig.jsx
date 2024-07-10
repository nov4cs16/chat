/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

export const commentConfig = {
    inertiaRoutes: {
        show: 'post.show',
        post: 'comment',
        put: 'comment.update',
        delete: 'comment.delete'
    },
    customInputs: [
        //funciona, falla el edit solamente { name: 'forum_id', options:'forums', type: 'select' },   
        { name: 'post_id', options: 'posts', key: 'name', id: 'id', type: 'select' },

        { name: 'body', type: 'textarea' },
        //{ name: 'forum', type: 'exclude' },
        //  { name: 'created_at', type: 'exclude' },
        //{ name: 'updated_at', type: 'exclude' }
    ],
    excludeKeys: [
      //  'type',
        'created_at',
        'updated_at'
    ],

    emptyEntity:
    {
        title: '',
        body: '',
        subforum_id: ''
    }
};