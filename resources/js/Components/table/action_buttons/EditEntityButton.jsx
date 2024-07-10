/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import React from 'react'

function EditEntityButton({entities, setSelectedEntity, setIsEditModalOpen, entity}) {

    /*const { editEntity } = useFetchEntities()

    const handleEditEntity = () => {
        const entityId = entity.id
        const updatedEntity=editEntity(entityId, entityName)                     
        setEntities((prevData) => prevData.map(item => (item.id === updatedEntity.id ? updatedEntity : item)));
    }*/
    const handleEditEntity=()=>{
        setSelectedEntity(entity)
        setIsEditModalOpen(true)    
    }
    
    return (
        <button onClick={handleEditEntity}>
            <span className="material-symbols-outlined py-3 px-1 text-orange-400" >
                edit
            </span>
        </button>
    )
}

export default EditEntityButton