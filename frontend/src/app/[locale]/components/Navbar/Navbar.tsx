'use client';

import React from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import {useTranslations} from 'use-intl';
import {Link} from '@/navigation';
import {pathnames} from '@/config';
import {usePathname} from '@/navigation'

// TODO: The button corresponding to the current page should be highlighted.
export const Navbar: React.FC = () => {
    const translations = useTranslations();
    const pathname = usePathname();
    const galleryLink = 'https://www.jpb-art.fr/';
    const linkData: { link: keyof typeof pathnames; content: string }[] = [
        {
            link: '/self-portraits', content: translations('common.selfPortraits'),
        },
        {
            link: '/other-works', content: translations('common.otherWorks'),
        },
        {
            link: '/biography', content: translations('common.biography'),
        },
    ];

    return (
        <nav className="bg-black">
            <div
                className="max-w-screen-xl flex items-center justify-between mx-auto space-x-0.5 pt-2 lg:pt-4 p-1 relative">
                <div className="flex space-x-2">
                    {/* Site title. Also acts as home button. */}
                    <Link href="/" className="flex-row">
                        <div>
                            <span
                                className="text-3xl font-semibold text-white dark:text-white text-nowrap">{translations('common.title')}</span>
                            <br/>
                            <span
                                className="text-xl font-light text-white dark:text-white text-nowrap">{translations('common.subtitle')}</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation. Links to rest of the website. Hidden when screen width is small. */}
                <div
                    className="hidden w-full absolute lg:flex space-x-4 ml-auto items-center content-center justify-center">
                    {linkData.map((item, index) => {
                        const isActive = pathname === item.link;

                        return (
                            <Link key={index} href={item.link}
                                  className={`text-xs sm:text-sm md:text-base lg:text-base font-semibold rounded py-2 px-4 
                                  ${isActive ? 'bg-gray-100 text-black' : 'text-gray-100 hover:bg-gray-100 hover:text-black'}`}>
                                {item.content}
                            </Link>
                        );
                    })}

                    <a href={galleryLink}
                       className="text-xs sm:text-sm md:text-base lg:text-base text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4">
                        {translations('common.gallery')}
                    </a>
                </div>

                <LanguageSelector/>
            </div>

            {/* Navigation menu items when screen width is small. Links to rest of the website. */}
            <div className={`lg:hidden max-w-screen-xl flex justify-center content-center items-center relative`}>
                <div className={`max-w-screen-sm flex justify-center`}>

                    {linkData.map((item, index) => {
                        return (
                            <Link key={index} href={item.link}
                                  className="text-xs sm:text-sm md:text-base lg:text-base text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4">
                                {item.content}
                            </Link>
                        );
                    })}

                    <a href={galleryLink}
                       className="text-xs sm:text-sm md:text-base lg:text-base text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4">
                        {translations('common.gallery')}
                    </a>


                </div>
            </div>
        </nav>
    );
};
