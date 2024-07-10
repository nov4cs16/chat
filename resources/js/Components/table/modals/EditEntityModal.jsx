/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import Modal from '@/Components/Modal';
import { entityConfig } from '@/config/entities/entitiesConfig';
import React, { useState, useEffect } from 'react';

import { Head, useForm } from '@inertiajs/react';

const EditEntityModal = ({ show, onClose, initialData, entityName }) => {
    const { config } = entityConfig(entityName);
    const customInput = config.customInputs;
    const routes = config.inertiaRoutes;

    const { data, setData, put, processing, errors } = useForm({
        ...initialData // Use initial data for editing
    });

    useEffect(() => {
        setData(initialData);
    }, [initialData]);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        put(route(routes.put, { id: initialData.id }, data), {
            onSuccess: () => {
                onClose();
            },
            onError: (error) => {
                console.error('Error updating entity:', error);
            }
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const renderInput = (key, value) => {

        const customField = customInput.find(input => input.name === key);

        if (customField) {
            if (customField.type === 'textarea') {
                return (
                    <textarea
                        name={key}
                        id={key}
                        value={value}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                );
            }
            if (customField.type === 'select') {

                return (
                    <select
                        name={key}
                        id={key}
                        value={value} // This is where the warning is likely originating from
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="" disabled>Select an option</option>
                        {initialData[customField.options].map(forum => (
                            <option key={forum['id']} value={forum['id']}>
                                {forum['name']}
                            </option>
                        ))}
                    </select>
                );
            }
        }

        if (Array.isArray(value)) {
            return (
                <input
                    type="text"
                    name={key}
                    id={key}
                    value={value.join(', ')}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            );
        } else if (typeof value === 'object' && value !== null) {
            return (
                <textarea
                    name={key}
                    id={key}
                    value={JSON.stringify(value, null, 2)}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            );
        } else {
            return (
                <input
                    type="text"
                    name={key}
                    id={key}
                    value={value}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            );
        }
    };


    return (
        <Modal show={show} onClose={onClose}>
            <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Edit Entity</h2>
                <form onSubmit={handleSubmit}>
                    {Object.keys(data).map((key) => {
                        const customField = customInput.find(input => input.name === key);
                        //if (customField && customField.type === 'exclude') {
                            if (!customField ) {
                            return null; // Exclude fields marked for exclusion
                        }
                        return (
                            <div key={key} className="mb-4">
                                <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </label>
                                {renderInput(key, data[key])}
                            </div>
                        );
                    })}

                    {errors.general && <div className="text-red-500 mt-2">{errors.general}</div>}

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
                            {processing ? 'Updating...' : 'Update'}
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default EditEntityModal;

