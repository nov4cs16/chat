/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="mt-[50px] mb-[200px] bg-transparent flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
           {/* <div className='mb-10'>
                <Link href="/">
                    
                    <div className="flex items-center space-x-1">
                                    <div className="bg-blue-900 text-white font-bold text-3xl p-2 rounded">
                                        SRD
                                    </div>
                                    <span className="text-2xl text-white font-semibold">forums</span>
                                </div>
                </Link>
            </div>*/}

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        
        
        
        </div>
    );
}
