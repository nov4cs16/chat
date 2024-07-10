/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import './bootstrap';
import '../css/app.css'; 


import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import setFullscreenHeight from './utils/setFullScreenHeight';

setFullscreenHeight();

const appName = import.meta.env.VITE_APP_NAME || 'SRDforums';

const pages = import.meta.glob('./Pages/**/*.jsx');

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        let path = `./Pages/${name}.jsx`;

        if (['Chat','AdminPanel', 'Subforum', 'Posts', 'Thread', 'ServiceTerms', 'Contact'].includes(name)) {
            const sections = {
                AdminPanel: 'Admin',
                Subforum: 'Subforum',
                Posts: 'Posts',
                Thread: 'Thread',
                ServiceTerms: 'Legal',
                Contact: 'Contact',
                Chat: 'Chat',
            };
            path = `./Pages/${sections[name]}/${name}.jsx`;
        }

        return resolvePageComponent(path, pages);
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
                    root.render(
                    <App {...props} />
            );

    },
    progress: {
        color: '#4B5563',
    },
});
