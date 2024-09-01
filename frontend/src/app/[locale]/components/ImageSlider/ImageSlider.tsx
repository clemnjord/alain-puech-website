import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import Image from 'next/image';

interface ImageSliderProps {
    images: {image: string}[];
    currentIndex: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({images, currentIndex}) => {
    const [current, setCurrent] = useState(currentIndex);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <div
            className="relative flex items-center justify-center mx-auto space-x-1 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 overflow-hidden w-full h-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <FaArrowAltCircleLeft
                className="text-gray-300 hover:text-gray-100 text-3xl sm:text-4xl md:text-5xl cursor-pointer select-none z-10"
                onClick={prevSlide} />
            <div className="relative w-full h-[32rem] sm:h-[40rem] md:h-[48rem] lg:h-[64rem] xl:h-[70rem]">
                {images.map((slide, index) => {
                    return (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                index === current ? 'opacity-100 z-10' : 'opacity-0'
                            }`}
                        >
                            {index === current && (
                                <Image
                                    src={slide.image}
                                    alt="slider image"
                                    layout="fill"
                                    objectFit="scale-down"
                                    priority
                                />
                            )}
                        </div>
                    );
                })}
            </div>
            <FaArrowAltCircleRight
                className="text-gray-300 hover:text-gray-100 text-3xl sm:text-4xl md:text-5xl cursor-pointer select-none z-10"
                onClick={nextSlide} />
        </div>
    );
};

export default ImageSlider;
