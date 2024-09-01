'use client';

import React, {useEffect, useState} from 'react';
import {SelfPortraitsBuilder} from '@/models/selfPortraitModel';
import SelfPortrait from './self-portrait';
import {FaTimesCircle} from 'react-icons/fa';

import ImageSlider from '@/app/[locale]/components/ImageSlider/ImageSlider';


interface DaySelfPortraitsProps {
    month: number;
    day: number;
}

// TODO: not necessarily something for here, but it might be better to use the route for the days?
//       something like www..../self-portraits/vertical-day/[month]/[day]/ ?
//       might be better for preloading ? SEO?
// TODO : Look into promises (is it react 19?) to avoid flickering when changing the language or the date.
const DaySelfPortraits: React.FC<DaySelfPortraitsProps> = ({month, day}) => {
    const [modal, setModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleModal = () => {
        setModal(!modal);
    };

    const updateModal = (index: number) => {
        setCurrentIndex(index);
        setModal(true);
    };

    useEffect(() => {
        if (modal) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }

        // Cleanup function to remove the class when the component unmounts or when modal state changes
        return () => {
            document.body.classList.remove('active-modal');
        };
    }, [modal]);


    const data = SelfPortraitsBuilder.generateDaySelfPortraits(new Date(2008, month, day));
    const selfPortraitsElements = [];

    for (let i = 0; i < data.length; i++) {
        selfPortraitsElements.push(
            <div onClick={() => updateModal(i)}
                 className={'md:w-1/2 lg:w-1/3 flex justify-center p-4 gallery-item cursor-pointer'}>
                <SelfPortrait key={data[i].getImgId()} selfPortrait={data[i]} />
            </div>,
        );
    }

    return (
        <div>
            {modal && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div
                        className="relative bg-black p-4 rounded-lg w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl max-h-[90vh] flex flex-col items-center">
                        <ImageSlider
                            images={data.map((val) => ({image: val.getImagePath()}))}
                            currentIndex={currentIndex}
                        />
                        <FaTimesCircle
                            className="absolute top-2 right-2 text-gray-300 hover:text-gray-100 text-3xl sm:text-4xl md:text-5xl cursor-pointer select-none p-2"
                            onClick={toggleModal} />

                    </div>
                </div>
            )}

            <div className="max-w-screen-xl flex flex-wrap justify-center items-center mx-auto">
                {selfPortraitsElements}
            </div>
        </div>
    );
};

export default DaySelfPortraits;
