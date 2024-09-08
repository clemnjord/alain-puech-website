'use client';

import React, {ReactNode, useEffect, useState} from 'react';
import {SelfPortraitModel, SelfPortraitsBuilder} from '@/models/selfPortraitModel';
import SelfPortrait from './self-portrait';
import {FaTimesCircle} from 'react-icons/fa';

import DayMonthPicker from "../components/DayMonthPicker/dayMonthPicker";

import ImageSlider from '@/app/[locale]/components/ImageSlider/ImageSlider';

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth();

// TODO: not necessarily something for here, but it might be better to use the route for the days?
//       something like www..../self-portraits/day/[month]/[day]/ ?
//       might be better for preloading ? SEO?
// TODO : Look into promises (is it react 19?) to avoid flickering when changing the language or the date.
// TODO: Some dates are not matching. There seem to be 2 31/11/2008.
const DaySelfPortraits: React.FC = () => {
    const [modal, setModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState<{ day: number; month: number }>({day:currentDay, month:currentMonth});
    const [data, setData] = useState<SelfPortraitModel[]>([]);
    const [selfPortraitsElements, setSelfPortraitsElements] = useState<ReactNode[]>([]);

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

    useEffect(() => {
        // Generate self-portraits based on the selected date
        const generatedData = SelfPortraitsBuilder.generateDaySelfPortraits(new Date(2008, selectedDate.month, selectedDate.day));
        setData(generatedData);
    }, [selectedDate]);

    useEffect(() => {
        // Update the list of portrait elements when data changes
        const tempElements: ReactNode[] = [];

        for (let i = 0; i < data.length; i++) {
            tempElements.push(
                <div key={data[i].getImgId()} onClick={() => updateModal(i)} className={'md:w-1/2 lg:w-1/3 flex justify-center p-4 gallery-item cursor-pointer'}>
                    <SelfPortrait selfPortrait={data[i]} />
                </div>,
            );
        }

        setSelfPortraitsElements(tempElements);
    }, [data]);


    const handleDateChange = (date: { day: number; month: number }) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <DayMonthPicker onDateChange={handleDateChange} initialDate={selectedDate} />

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
