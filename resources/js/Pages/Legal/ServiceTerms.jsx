/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react'

function ServiceTerms({ auth }) {

    return (
        <>
            <Head title="Welcome" />


            <main className="mt-10">
                <div className="p-6">
                    {/*<h2 className="text-lg font-medium text-white mb-4">Términos y Condiciones del Acuerdo</h2>*/}
                    <div className="flex flex-col">
                        <div className="rounded p-6 bg-blue-900 text-white">

                            <p className='text-white'>
                                <span className="text-lg font-medium text-white mb-4">Acuerdo de Registro</span> <br></br><br></br>

                                Está de acuerdo, mediante el uso de este foro, en no publicar ningún material "falso, difamatorio, inexacto, abusivo, vulgar, odioso, intimidatorio, obsceno, orientado sexualmente, amenazante, que invada la privacidad de la persona, material para adultos, o que viole cualquier ley internacional". También está de acuerdo en no publicar material "protegido por derechos de autor, excepto que sea el propietario de los derechos o tenga el consentimiento por escrito del propietario del material protegido". También están prohibidos en este foro "spam, flooding, anuncios, mensajes en cadena, esquemas piramidales y colectas".

                                Tenga en cuenta que es imposible para el personal o los dueños de este foro confirmar la validez de los mensajes. Por favor, recuerde que no vigilamos activamente los mensajes publicados; por lo tanto, no somos responsables de su contenido. No garantizamos la exactitud, integridad o utilidad de ninguna información presentada. Los mensajes publicados expresan la opinión del autor, y no necesariamente las opiniones de este foro, su personal, sus subsidiarios o los dueños. Se invita a cualquiera que considere que un mensaje publicado es censurable a notificarlo al administrador o moderador del foro de manera inmediata. El personal y los dueños del foro se reservan el derecho a eliminar contenido censurable dentro de un tiempo razonable si determinan que la eliminación es necesaria. Este es un proceso manual, así que, por favor, entienda que pueden no ser capaces de eliminar o modificar mensajes particulares de manera inmediata. Esta política se aplica también a la información del perfil del usuario.

                                Usted es el único responsable del contenido de los mensajes que publica. Además, está de acuerdo en indemnizar y liberar de toda responsabilidad a los dueños de este foro, cualquier sitio web relacionado con este foro, su personal y sus subsidiarios. Los dueños de este foro también se reservan el derecho a revelar su identidad (o cualquier información relacionada recogida en este servicio) en el supuesto caso de una queja formal o proceso legal que pueda derivarse de cualquier situación causada por su uso de este foro.

                                Cuando se registra, tiene la posibilidad de elegir su nombre de usuario. Le aconsejamos que utilice un nombre apropiado. Con esta cuenta de usuario que está a punto de registrar, se compromete a no entregar jamás su contraseña a otra persona, para su protección y por motivos de validación. También está de acuerdo en no usar NUNCA la cuenta de otras personas bajo ningún concepto. Le recomendamos EXPRESAMENTE que use una contraseña compleja y única para su cuenta, a fin de prevenir su robo.

                                Después de registrarse e ingresar en el foro, podrá llenar su perfil detalladamente. Es su responsabilidad presentar información nítida y exacta. Cualquier información que el dueño o el personal del foro determinen como inexacta o de naturaleza vulgar será eliminada, con o sin previo aviso. Pueden aplicarse sanciones que se consideren convenientes.

                                Por favor, tenga en cuenta que con cada mensaje, se almacena su dirección IP, en el supuesto caso de que debamos bloquear su acceso al foro o contactar a su proveedor de acceso a internet. Esto solo ocurrirá en caso de una violación importante de este acuerdo.

                                Tenga en cuenta también que el software coloca una cookie, un archivo de texto que contiene bits de información (como su nombre o su contraseña), en la caché de su navegador. Esto SOLO se usa para mantenerlo conectado/desconectado. El software no reúne ni envía ningún otro tipo de información a su ordenador.
                            </p>

                        </div>
                        <Link
                            href="/register"  // Asegúrate de que este enlace apunta al destino correcto
                            style={{
                                display: 'block',
                                margin: '20px auto',

                                textAlign: 'center',
                                color: 'white', // Texto blanco
                                padding: '10px 20px', // Relleno
                                borderRadius: '5px', // Bordes redondeados
                                textDecoration: 'none' // Elimina el subrayado del enlace
                            }}
                            className="bg-green-800"
                        >
                            ACEPTO LOS TÉRMINOS DEL ACUERDO
                        </Link>
                    </div>
                </div>
            </main>

        </>
    );

}

export default ServiceTerms

ServiceTerms.layout = page => <PublicLayout children={page} hideTerms={true} title="Service Terms" />