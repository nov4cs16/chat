/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import { Link, usePage } from '@inertiajs/react'
import React, { useEffect, useRef, useState } from 'react'



function PublicLayout({ children, hideTerms = false }) {
    const { auth } = usePage().props;

    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            hamburgerRef.current &&
            !hamburgerRef.current.contains(event.target)
        ) {
            setMenuOpen(false);
        }
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="min-w-[327px] flex items-center justify-center bg-gradient-to-r from-red-600 to-red-400 text-black/50">
            <div className="mt-10 sm::w-[90vw] lg:w-[80vw] relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                <div className="relative w-full sm:px-2 sm:px-10">
                    <header className="flex flex-col items-center lg:items-start justify-center lg:justify-between">
                        <div className="flex flex-row justify-between gap-[40vw] sm:gap-[55vw] md:gap-[55vw] py-[5px] lg:justify-center">
                        <div className="flex items-center space-x-1">
                                <div className="lg:hidden bg-red-950  text-white font-bold text-3xl p-2 rounded">
                                    SRD
                                </div>
                                <span className="lg:hidden text-2xl text-white font-semibold">chat</span>
                            </div>
                            <div style={{ justifySelf: 'end' }} className="lg:hidden flex items-center">
                                <button onClick={toggleMenu} ref={hamburgerRef} className="text-white focus:outline-none">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <nav
                            ref={menuRef}
                            className={`mt-5 w-[89vw] sm:w-[60vw] lg:flex flex-1 justify-end ${menuOpen ? 'block' : 'hidden'
                                } flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4`}
                        >
                            <div className="hidden sm:hidden lg:flex box flex items-center space-x-1">
                                <div className="bg-red-950 text-white font-bold text-3xl p-2 rounded">
                                    SRD
                                </div>
                                <span className="text-2xl text-white font-semibold">chat</span>
                            </div>
                            <div className='flex flex-col gap-2 lg:flex-row'>
                                <Link
                                    href="/"
                                    onClick={handleCloseMenu} // Agregar el manejador de clic para cerrar el menú
                                    className="border lg:border-none text-center block lg:inline-block lg:mt-0 text-white rounded-md px-3 py-2 text-sm lg:text-base ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    Inicio
                                </Link>
                                <Link
                                    href="/"
                                    onClick={handleCloseMenu} // Agregar el manejador de clic para cerrar el menú
                                    className="border lg:border-none text-center block lg:inline-block lg:mt-0 text-white rounded-md px-3 py-2 text-sm lg:text-base ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    Chat
                                </Link>
                                <Link
                                    href="/contact"
                                    onClick={handleCloseMenu} // Agregar el manejador de clic para cerrar el menú
                                    className="border lg:border-none text-center block lg:inline-block lg:mt-0 text-white rounded-md px-3 py-2 text-sm lg:text-base ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    Contacto
                                </Link>
                                {auth.user ? (
                                    <Link
                                        href="/dashboard"
                                        onClick={handleCloseMenu} // Agregar el manejador de clic para cerrar el menú
                                        className="border lg:border-none text-center block lg:inline-block lg:mt-0 text-white rounded-md px-3 py-2 text-sm lg:text-base ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href="/login"
                                            onClick={handleCloseMenu} // Agregar el manejador de clic para cerrar el menú
                                            className="border lg:border-none text-center block lg:inline-block lg:mt-0 text-white rounded-md px-3 py-2 text-sm lg:text-base ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                        >
                                            Ingresar
                                        </Link>
                                        <Link
                                            /* href="/register"*/
                                            href={route('serviceterms')}
                                            onClick={handleCloseMenu} // Agregar el manejador de clic para cerrar el menú
                                            className="border lg:border-none text-center block lg:inline-block lg:mt-0 text-white rounded-md px-3 py-2 text-sm lg:text-base ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                        >
                                            Registrarse
                                        </Link>

                                    </>
                                )}
                            </div>
                        </nav>
                    </header>
                    {children}
                    {!hideTerms &&
                        <footer className="py-16 text-center text-sm text-black">
                            <Link
                                href={route('serviceterms')}
                                className="ml-5 text-sm text-white underline hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Términos y Condiciones
                            </Link>
                        </footer>
                    }
                </div>
            </div>
        </div>
    );
}

export default PublicLayout;

