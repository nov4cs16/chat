/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

export const postConfig = {
    inertiaRoutes: {
        show: 'post.show',
        post: 'post.store',
        put: 'post.update',
        delete: 'post.delete'
    },
    customInputs: [
        //funciona, falla el edit solamente { name: 'forum_id', options:'forums', type: 'select' },   
        { name: 'subforum_id', options: 'subforums', key: 'name', id: 'id', type: 'select' },
        { name: 'title', type: 'text' },

        { name: 'body', type: 'textarea' },
        //{ name: 'forum', type: 'exclude' },
        //  { name: 'created_at', type: 'exclude' },
        //{ name: 'updated_at', type: 'exclude' }
    ],
    excludeKeys: [
        'type',
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