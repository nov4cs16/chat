/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import CustomTable from '@/Components/table/CustomTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useFetchEntities } from '@/hooks/useFetchEntities';
import { Head, Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { router } from '@inertiajs/react'


export default function AdminPanel({ auth }) {

    const { props } = usePage();
    const { entityName, ...rest } = props;

    const {
        setData,
        loading,
        setEntityName,
        editEntity,
        deleteEntity,
        createEntity
    } = useFetchEntities(entityName);

    useEffect(() => {
        if (!auth.roles.includes('admin')) {
            router.visit('/', {
            })
        }
    }, [auth.roles]);

    const handleClick = (e) => {
        setEntityName(e.target.innerText)
    }

    if (loading || !auth.roles.includes('admin')) {
        return null;
    }

    return (
        <AuthenticatedLayout
            auth={auth}
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin panel</h2>}
        >
            <Head title="Admin panel" />
            <button onClick={handleClick}>users</button>
            <Link
                href={route('admin.panel.subforums')}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
            >
                subforums
            </Link>
            <Link
                href={route('admin.panel.forums')}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
            >
                forums
            </Link>

            <div className="py-12 h-screen">
                <div className="max-w-auto mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <CustomTable
                                values={rest}
                                setValues={setData}
                                showActionColumns={true}
                                entityName={entityName}
                                editEntity={editEntity}
                                deleteEntity={deleteEntity}
                                createEntity={createEntity}
                                showCheckboxes={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

