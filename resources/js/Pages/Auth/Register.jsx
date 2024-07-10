/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import { router } from '@inertiajs/react'
import PublicLayout from '@/Layouts/PublicLayout';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        agreeTerms: false // Agregamos un nuevo campo para el checkbox de términos de servicio
    });

    const [showTermsModal, setShowTermsModal] = useState(false);
    const [isScrollEnd, setIsScrollEnd] = useState(false);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const openTermsModal = (e) => {
        e.preventDefault();
        setShowTermsModal(true);
    };

    const closeTermsModal = () => {
        setShowTermsModal(false);
    };

    const redirectToLogin = () => {
        router.visit('/', {
        })
        // setShowTermsModal(false);
    }

    const handleScroll = (e) => {
        const bottom =
            e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        setIsScrollEnd(bottom);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <form className="" onSubmit={submit}>
                <div className="flex items-center justify-start space-x-1 py-[35px]">
                    <span className="text-2xl text-blue-950 font-semibold">Registro</span>
                </div>
                <div>
                    <InputLabel htmlFor="name" value="Nombre" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Contraseña" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirmar Contraseña" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Ya estas registrado?
                    </Link>

                    {/* Deshabilitar el botón de registro si el checkbox no está marcado */}
                    <PrimaryButton className="ms-4" >
                        Registrarse
                    </PrimaryButton>
                </div>
                {/*<div style={{ fontSize: '15px' }} className="mt-4">
                    Haciendo clic en el botón REGISTRARSE, estás aceptando los
                    <Link
                        style={{ marginLeft: '5px', fontSize: '15px' }}
                        href={route('register')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        términos y condiciones del acuerdo.
                    </Link>

                </div>*/}
            </form>

            <Modal
                show={showTermsModal}
                onClose={closeTermsModal}
                maxWidth="xll"
                closeOnOutsideClick={false}
                closeOnEscape={false}
            >
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Términos y Condiciones del Acuerdo</h2>
                    {/* Contenido de los términos de servicio */}
                    <div className="">
                        <div className="max-h-80 overflow-y-auto" onScroll={handleScroll}>
                            <p>
                                Está de acuerdo, mediante el uso de este foro, en no publicar ningún material "falso, difamatorio, inexacto, abusivo, vulgar, odioso, intimidatorio, obsceno, orientado sexualmente, amenazante, que invada la privacidad de la persona, material para adultos, o que viole cualquier ley internacional". También está de acuerdo en no publicar material "protegido por derechos de autor, excepto que sea el propietario de los derechos o tenga el consentimiento por escrito del propietario del material protegido". También están prohibidos en este foro "spam, flooding, anuncios, mensajes en cadena, esquemas piramidales y colectas".

                                Tenga en cuenta que es imposible para el personal o los dueños de este foro confirmar la validez de los mensajes. Por favor, recuerde que no vigilamos activamente los mensajes publicados; por lo tanto, no somos responsables de su contenido. No garantizamos la exactitud, integridad o utilidad de ninguna información presentada. Los mensajes publicados expresan la opinión del autor, y no necesariamente las opiniones de este foro, su personal, sus subsidiarios o los dueños. Se invita a cualquiera que considere que un mensaje publicado es censurable a notificarlo al administrador o moderador del foro de manera inmediata. El personal y los dueños del foro se reservan el derecho a eliminar contenido censurable dentro de un tiempo razonable si determinan que la eliminación es necesaria. Este es un proceso manual, así que, por favor, entienda que pueden no ser capaces de eliminar o modificar mensajes particulares de manera inmediata. Esta política se aplica también a la información del perfil del usuario.

                                Usted es el único responsable del contenido de los mensajes que publica. Además, está de acuerdo en indemnizar y liberar de toda responsabilidad a los dueños de este foro, cualquier sitio web relacionado con este foro, su personal y sus subsidiarios. Los dueños de este foro también se reservan el derecho a revelar su identidad (o cualquier información relacionada recogida en este servicio) en el supuesto caso de una queja formal o proceso legal que pueda derivarse de cualquier situación causada por su uso de este foro.

                                Cuando se registra, tiene la posibilidad de elegir su nombre de usuario. Le aconsejamos que utilice un nombre apropiado. Con esta cuenta de usuario que está a punto de registrar, se compromete a no entregar jamás su contraseña a otra persona, para su protección y por motivos de validación. También está de acuerdo en no usar NUNCA la cuenta de otras personas bajo ningún concepto. Le recomendamos EXPRESAMENTE que use una contraseña compleja y única para su cuenta, a fin de prevenir su robo.

                                Después de registrarse e ingresar en el foro, podrá llenar su perfil detalladamente. Es su responsabilidad presentar información nítida y exacta. Cualquier información que el dueño o el personal del foro determinen como inexacta o de naturaleza vulgar será eliminada, con o sin previo aviso. Pueden aplicarse sanciones que se consideren convenientes.

                                Por favor, tenga en cuenta que con cada mensaje, se almacena su dirección IP, en el supuesto caso de que debamos bloquear su acceso al foro o contactar a su proveedor de acceso a internet. Esto solo ocurrirá en caso de una violación importante de este acuerdo.

                                Tenga en cuenta también que el software coloca una cookie, un archivo de texto que contiene bits de información (como su nombre o su contraseña), en la caché de su navegador. Esto SOLO se usa para mantenerlo conectado/desconectado. El software no reúne ni envía ningún otro tipo de información a su ordenador.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4 gap-5">
                        <button
                            onClick={redirectToLogin}
                            className={`px-4 py-2 text-white rounded focus:outline-none focus:bg-red-600 bg-red-600`}
                        >
                            RECHAZAR
                        </button>
                        <button
                            onClick={closeTermsModal}
                            disabled={!isScrollEnd}
                            className={`px-4 py-2 text-white rounded focus:outline-none focus:bg-blue-600 ${isScrollEnd ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            ACEPTO LOS TÉRMINOS Y CONDICIONES DEL ACUERDO
                        </button>
                    </div>
                </div>
            </Modal>

        </GuestLayout>
    );
}

Register.layout = page => <PublicLayout children={page} hideTerms={true} title="Register" />