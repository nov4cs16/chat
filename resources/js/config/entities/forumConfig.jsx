/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

export const forumConfig = {
    inertiaRoutes:{
        show:'forum.show',
        post:'forum',
        put:'forum.update',
        delete:'forum.delete'
       },
    customInputs: [
        { name: 'name', type: 'text' },
        { name: 'description', type: 'textarea' }
    ],
    excludeKeys: [
        'type',
        'created_at',
        'updated_at'
    ],
    emptyEntity:
    {
        name: '',
        description: '',
      //  forum_id: '',
    }

};