'use client';

import React, {useEffect, useMemo, useState} from 'react';
import {FaTimesCircle} from 'react-icons/fa';

import {useRouter} from '@/i18n/routing';
import {SelfPortraitsBuilder} from '@/models/selfPortraitModel';
import SelfPortrait from '@/app/[locale]/components/SelfPortraitWork/self-portrait';
import TemplateSelfPortraits from '@/app/[locale]/self-portraits/templateSelfPortrait';
import DayMonthPicker from '@/app/[locale]/components/DayMonthPicker/dayMonthPicker';
import ImageSlider from '@/app/[locale]/components/ImageSlider/ImageSlider';


// TODO : Look into promises (is it react 19?) to avoid flickering when changing the language or the date.
// TODO: Some dates are not matching. There seem to be 2 31/11/2008.

export default function DaySelfPortraits({params}: {params: {day: number, month: number}}) {
    const [modal, setModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();

    const data = SelfPortraitsBuilder.generateDaySelfPortraits(new Date(2008, params.month, params.day));

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

        return () => {
            document.body.classList.remove('active-modal');
        };
    }, [modal]);

    const selfPortraitsElements = useMemo(() => {
        return data.map((item, index) => (
            <div key={index} onClick={() => updateModal(index)}
                 className={'md:w-1/2 lg:w-1/3 flex justify-center p-4 gallery-item cursor-pointer'}>
                <SelfPortrait key={index} selfPortrait={item} />
            </div>

        ));
    }, [data]);

    const handleDateChange = async (date: {day: number; month: number}) => {
        router.push({
            pathname: '/self-portraits/daily-view/[month]/[day]',
            params: {day: date.day, month: date.month},
        }, {scroll: false});
    };

    return (
        <div>
            <TemplateSelfPortraits />

            <DayMonthPicker handleDateChange={handleDateChange} initialDate={{month: params.month, day: params.day}} />

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
}