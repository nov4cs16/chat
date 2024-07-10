/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import React from 'react'

import { useForm } from '@inertiajs/react';
import { entityConfig } from '@/config/entities/entitiesConfig';

function DeleteEntityButton({ onDelete, entity, entityName, setEntities }) {
    const { delete: destroy } = useForm();
    const { config } = entityConfig(entityName);
    const routes = config.inertiaRoutes;

    const handleDeleteEntity = () => {
        const entityId = entity.id;
        //const deleteRoute = route(`${entityName}.destroy`, entityId);

        destroy(route(routes.delete, { id: entity.id }), {
        //destroy(routes.delete, {
            onSuccess: () => {
           /*     if (onDelete) {
                    onDelete(entityId);
                }*/
              //  setEntities(prevEntities => prevEntities.filter(e => e.id !== entityId));
            },
            onError: (error) => {
                console.error('Error deleting entity:', error);
            }
        });
    };

    return (
        <button onClick={handleDeleteEntity}>
            <span className="material-symbols-outlined py-3 px-1 text-red-600">
                delete
            </span>
        </button>
    );
}

export default DeleteEntityButton;
