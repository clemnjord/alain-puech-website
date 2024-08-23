"use client"
import React, { useEffect, useState } from 'react';

interface Technique {
    title: string;
    description: string;
}

export default function HomePage() {
    const [technique, setTechnique] = useState<Technique | null>(null);
    const [language, setLanguage] = useState('fr');

    // useEffect(() => {
    //     async function fetchTechnique() {
    //         const res = await fetch(`/api/techniques/1?lang=${language}`);
    //         if (res.ok) {
    //             const data = await res.json();
    //             setTechnique(data);
    //         }
    //     }
    //     fetchTechnique();
    // }, [language]);

    return (
        <div className="flex flex-col md:flex-row justify-center items-start p-5 md:space-x-8">

            <div className="w-full md:w-2/3">
                <video controls className="w-full h-auto rounded-lg border-2 border-gray-300">
                    <source src="/path/to/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}