'use client';
import React, {useEffect, useState} from 'react';

export default function HomePage() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-start p-5 md:space-x-8'>
            <div className='w-full md:w-2/3'>
                <video controls className='w-full h-auto rounded-lg border-2 border-gray-300'>
                    <source src='/path/to/video.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
