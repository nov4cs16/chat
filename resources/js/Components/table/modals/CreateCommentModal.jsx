/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */
    
import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal';

const CreateCommentModal = ({ show, onClose, threadId, userId }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
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
        post(route('commentt.store', { post_id: threadId,user_id: userId }), {
            onSuccess: () => {
                onClose();
            },
            onError: (error) => {
                console.error('Error creating comment:', error);
            },
        });
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Add a Comment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="body" className="block text-sm font-medium text-gray-700">
                            Comment
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

export default CreateCommentModal;
