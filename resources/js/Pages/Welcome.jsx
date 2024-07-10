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


const Welcome = () => {
    const [messages, setMessages] = useState([{ userName: "", message: "¡Bienvenidos al chat de discusiones generales!" }]);
    const messagesEndRef = useRef(null);
    const { props } = usePage(); 
    const { user } = props.auth; 
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
        reset('message');
        if (user) {
            const newMessage = { userName: user.name, message: data.message };
            setMessages(prevMessages => [...prevMessages, newMessage]);
        }
        await post('/send_message', {
            onSuccess: () => {
            },
        });
    };

    return (
        <main className="sm:mt-10">
            <div className="sm:rounded flex flex-col h-[calc(100dvh-123px)] sm:h-[70dvh] w-[calc(100vw-0px)] sm:w-[90vw]  lg:w-full bg-gray-100 mt-[20px]">
                <div className="flex-grow overflow-y-auto p-4 mt-4">
                    <div className="welcome-message  mx-auto text-center rounded mb-8">
                        <span className='text-red-500 font-extrabold'> chat publico</span>
                    </div>

                    {messages.map((msg, idx) => (
                        <div key={idx} className="mb-[30px]">
                            {user && msg.userName === user.name ? (
                                <>
                                    <div className='flex gap-1 justify-end lg:justify-start '>
                                        <p className='bg-green-200 px-2 py-2 rounded text-right'>
                                            <strong className="text-blue-600">{msg.userName !== "" ? `` : ""} </strong>
                                            <span className="text-gray-800">{msg.message}</span>
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <div className='flex gap-1 justify-start'>
                                    <p className='bg-red-200 px-2 py-2 rounded'>
                                        <strong className="text-red-600">{msg.userName !== "" ? `${msg.userName}:` : ""} </strong>
                                        <span className="text-gray-800">{msg.message}</span>
                                    </p>
                                </div>
                            )
                            }
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <form onSubmit={sendMessage} className="flex items-center justify-between p-4 border-t border-gray-300 bg-white">
                    <input
                        type="text"
                        value={data.message}
                        onChange={e => setData('message', e.target.value)}
                      /*  disabled={processing}*/
                        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="escribe un mensaje..."
                    />
                    <button type="submit" /*disabled={processing}*/ className="ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50">
                        enviar
                    </button>
                </form>
                {errors.message && <div className="text-red-500 p-2">{errors.message}</div>}
            </div>
        </main>
    );
};

export default Welcome;


Welcome.layout = page => <PublicLayout children={page} title="Chat" />