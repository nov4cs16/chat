/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import CustomTable from '@/Components/table/CustomTable';
import PublicLayout from '@/Layouts/PublicLayout';
import { Link, Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import { useState } from 'react';

export default function Contact({ auth, laravelVersion, phpVersion }) {
    const { props } = usePage();
    const { entityName, ...rest } = props;
    const newsData = { data: [{ contacto: 'sergioruizdia2019@gmail.com' },/*{ "": 'La página ' }*/] }
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <Head title="Contact" />
          
                        <main className="mt-20">
                            <div className="welcome-message max-w-3xl mx-auto text-center mt-8">
                                <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">¡Contactate conmigo!</h1>
                                <p className="text-lg text-white">Cualquier duda o consulta estoy a tu disposicion!</p>
                            </div>

                            <div className="flex flex-col gap-y-[26px] h-screen mt-6">
                                <div className="mb-4">
                                    <CustomTable
                                        values={newsData}
                                        entityName={""}
                                        headColor={"bg-gradient-to-r from-orange-700 to-orange-400"}
                                    />
                                </div>
                             
                            </div>
                        </main>

        </>
    );

}


Contact.layout = page => <PublicLayout  children={page} title="Contact" />