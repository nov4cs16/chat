/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal';

const CreatePostModal = ({ show, onClose, userId,subforumId }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        body: '',
    });

    useEffect(() => {
        if (!show) {
            reset();
        }
    }, [show]);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('post', { user_id: userId, subforum_id:subforumId }), {
            onSuccess: () => {
                onClose();
            },
            onError: (error) => {
                console.error('Error creating post:', error);
            },
        });
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="bg-blue-950 p-6">
                <h2 className="text-lg font-medium text-blue-50 mb-4">Create a New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-blue-50">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={data.title}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.title && <div className="text-red-500 mt-2">{errors.title}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="block text-sm font-medium text-blue-50">
                            Body
                        </label>
                        <textarea
                            name="body"
                            id="body"
                            value={data.body}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.body && <div className="text-red-500 mt-2">{errors.body}</div>}
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-600 text-white px-4 py-2 rounded-md shadow-sm mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm"
                            disabled={processing}
                        >
                            {processing ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default CreatePostModal;
