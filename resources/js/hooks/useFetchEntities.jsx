/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import { router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export const useFetchEntities = (entityName) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/${entityName}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [entityName]);

    const createEntity = async (newData) => {
        try {
            const response =  router.post(`/api/${entityName}`, {
                data: newData, // Aquí se pasa directamente newData como datos
            });
            
            if (response && response.ok) {
                const createdData = response.data; // Utiliza response.data para obtener los datos
                setData((prevData) => [...prevData, createdData]);
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            setError('Failed to create data');
        } finally {
            setLoading(false);
        }
    };

    const createEntity22 = async (newData) => {
        try {
            
            const response = await fetch(`/api/${entityName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const createdData = await response.json();
            setData((prevData) => [...prevData, createdData]);
        } catch (error) {
            setError('Failed to create data');
        } finally {
            setLoading(false);
        }
    };

    const deleteEntity = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/${entityName}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setData((prevData) => prevData.filter(item => item.id !== id));
        } catch (error) {
            setError('Failed to delete data');
        } finally {
            setLoading(false);
        }
    };

    const editEntity = async (data) => {
        setLoading(true);
        setError(null);

        const id = data.id;

        try {
            const response = await fetch(`/api/${entityName}/${id}`, {
                method: 'PUT', // or 'PATCH' depending on your API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const updatedData = await response.json();
            setData((prevData) => prevData.map(item => (item.id === id ? updatedData : item)));
        } catch (error) {
            setError('Failed to edit data');
        } finally {
            setLoading(false);
        }
    };

    return {
        setData,
        data,
        loading,
        error,
        deleteEntity,
        editEntity,
        createEntity
    };
};