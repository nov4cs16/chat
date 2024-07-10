/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

export const subforumConfig = {
    inertiaRoutes:{
        show:'subforum.show',
     post:'subforum',
     put:'subforum.update',
     delete:'subforum.delete'
    },
    customInputs: [
        //funciona, falla el edit solamente { name: 'forum_id', options:'forums', type: 'select' },   
        { name: 'forum_id', options:'forums', key:'name',id:'id', type: 'select' },   
        { name: 'name', type: 'text' },

        { name: 'description', type: 'textarea' },
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
        name: '',
        description: '',
        forum_id:''
    }
};