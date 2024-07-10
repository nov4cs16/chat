/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import React, { useState, useEffect, useRef } from 'react';
import Pusher from 'pusher-js';
import { useForm } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { usePage } from '@inertiajs/react';


const Chat = () => {
    const [messages, setMessages] = useState([{ userName: "", message: "¡Bienvenidos al chat de discusiones generales!" }]);
    const messagesEndRef = useRef(null);
    const { props } = usePage(); // Ajusta esto según cómo obtienes tus props en tu entorno
    const { user } = props.auth; // Ajusta esto según cómo obtienes la información del usuario en tu entorno
    const { data, setData, post, processing, errors, reset } = useForm({
        message: '',
    });

    useEffect(() => {
        Pusher.logToConsole = false;

        const pusher = new Pusher(import.meta.env.VITE_PUSHER_APP_KEY, {
            cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
        });
        const channel = pusher.subscribe('chat');
        channel.bind('my-message', function (data) {
            // Verificar si el mensaje ya existe para evitar duplicados
            const newMessage = { userName: data.userName, message: data.message };
            const isDuplicate = messages.some(msg => msg.userName === newMessage.userName && msg.message === newMessage.message);

            if (!isDuplicate) {
                setMessages(prevMessages => [...prevMessages, newMessage]);
            }
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();

        // Guardar el mensaje localmente antes de enviarlo al servidor
        if(user){
        const newMessage = { userName: user.name, message: data.message };
        // No actualices el estado local aquí, espera a que se confirme en el servidor
        setMessages(prevMessages => [...prevMessages, newMessage]);
        }
        // Enviar el mensaje al servidor
        await post('/send_message', {
            onSuccess: () => {
                // Actualizar el estado local solo después de que se complete la operación en el servidor
                
                reset('message'); // Resetear el formulario después del éxito
            },
        });
    };

    return (
        <main className="sm:mt-20">
            <div className="flex flex-col h-[calc(100dvh-123px)] sm:h-[50vh] w-[calc(100vw-0px)] sm:w-full bg-gray-100 mt-[20px]">
                <div className="flex-grow overflow-y-auto p-4 mt-4">
                    <div className="welcome-message  mx-auto text-center bg-blue-200 mb-4">
                        <span className='text-blue-500 font-extrabold'> chat publico</span>
                    </div>
                    {messages.map((msg, idx) => (
                        <div key={idx} className="mb-4">
                            <strong className="text-blue-600">{msg.userName !== "" ? `${msg.userName}:` : ""} </strong>
                            <span className="text-gray-800">{msg.message}</span>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <form onSubmit={sendMessage} className="flex items-center justify-between p-4 border-t border-gray-300 bg-white">
                    <input
                        type="text"
                        value={data.message}
                        onChange={e => setData('message', e.target.value)}
                        disabled={processing}
                        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="escribe un mensaje..."
                    />
                    <button type="submit" disabled={processing} className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50">
                        enviar
                    </button>
                </form>
                {errors.message && <div className="text-red-500 p-2">{errors.message}</div>}
            </div>
        </main>
    );
};

export default Chat;


Chat.layout = page => <PublicLayout children={page} title="Chat" />