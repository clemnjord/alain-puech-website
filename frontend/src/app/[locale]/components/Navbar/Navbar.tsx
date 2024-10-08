'use client';

import React from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import {useTranslations} from 'use-intl';
import {Link, usePathname, Pathnames} from '@/i18n/routing';

export const Navbar: React.FC = () => {
    const translations = useTranslations();
    const pathname = usePathname();
    const galleryLink = 'https://www.jpb-art.fr/';

    // TODO: See below
    // const linkData: {link: Pathnames; content: string}[] = [
    //     {
    //         link: '/self-portraits', content: translations('common.selfPortraits'),
    //     },
    //     {
    //         link: '/other-works', content: translations('common.otherWorks'),
    //     },
    //     {
    //         link: '/biography', content: translations('common.biography'),
    //     },
    // ];

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
                            <br />
                            <span
                                className="text-xl font-light text-white dark:text-white text-nowrap">{translations('common.subtitle')}</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation. Links to rest of the website. Hidden when screen width is small. */}
                <div
                    className="hidden w-full absolute lg:flex space-x-4 ml-auto items-center content-center justify-center">

                    {/* TODO: I like this implementation better, except for this error on href.
                          Keeping comment code for now */}

                    {/*{linkData.map((item, index) => {*/}
                    {/*    const isActive = pathname === item.link;*/}

                    {/*    return (*/}
                    {/*        <Link key={index} href={item.link}*/}
                    {/*              className={`text-xs sm:text-sm md:text-base lg:text-base font-semibold rounded py-2 px-4 */}
                    {/*              ${isActive ? 'bg-gray-100 text-black' : 'text-gray-100 hover:bg-gray-100 hover:text-black'}`}>*/}
                    {/*            {item.content}*/}
                    {/*        </Link>*/}
                    {/*    );*/}
                    {/*})}*/}

                    <Link href="/self-portraits"
                          className={`text-xs sm:text-sm md:text-base lg:text-base font-semibold rounded py-2 px-4 
                                  ${pathname === '/self-portraits' ? 'bg-gray-100 text-black' : 'text-gray-100 hover:bg-gray-100 hover:text-black'}`}
                    >
                        {translations('common.selfPortraits')}
                    </Link>

                    <Link href="/other-works"
                          className={`text-xs sm:text-sm md:text-base lg:text-base font-semibold rounded py-2 px-4 
                                  ${pathname === '/other-works' ? 'bg-gray-100 text-black' : 'text-gray-100 hover:bg-gray-100 hover:text-black'}`}
                    >
                        {translations('common.otherWorks')}
                    </Link>

                    <Link href="/biography"
                          className={`text-xs sm:text-sm md:text-base lg:text-base font-semibold rounded py-2 px-4 
                                  ${pathname === '/biography' ? 'bg-gray-100 text-black' : 'text-gray-100 hover:bg-gray-100 hover:text-black'}`}
                    >
                        {translations('common.biography')}
                    </Link>

                    <a href={galleryLink}
                       className="text-xs sm:text-sm md:text-base lg:text-base text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4">
                        {translations('common.gallery')}
                    </a>
                </div>

                <LanguageSelector />
            </div>

            {/* Navigation menu items when screen width is small. Links to rest of the website. */}
            <div className={`lg:hidden max-w-screen-xl flex justify-center content-center items-center relative`}>
                <div className={`max-w-screen-sm flex justify-center`}>

                    {/* TODO: I like this implementation better, except for this error on href.
                          Keeping comment code for now */}

                    {/*{linkData.map((item, index) => {*/}
                    {/*    const isActive = pathname === item.link;*/}

                    {/*    return (*/}
                    {/*        <Link key={index} href={item.link}*/}
                    {/*              className={`text-xs sm:text-sm md:text-base lg:text-base font-semibold rounded py-2 px-4 */}
                    {/*              ${isActive ? 'bg-gray-100 text-black' : 'text-gray-100 hover:bg-gray-100 hover:text-black'}`}>*/}
                    {/*            {item.content}*/}
                    {/*        </Link>*/}
                    {/*    );*/}
                    {/*})}*/}

                    <Link href="/self-portraits"
                          className={`text-xs sm:text-sm md:text-base lg:text-base font-semibold rounded py-2 px-4 
                                  ${pathname === '/self-portraits' ? 'bg-gray-100 text-black' : 'text-gray-100 hover:bg-gray-100 hover:text-black'}`}
                    >
                        {translations('common.selfPortraits')}
                    </Link>

                    <Link href="/other-works"
                          className={`text-xs sm:text-sm md:text-base lg:text-base font-semibold rounded py-2 px-4 
                                  ${pathname === '/other-works' ? 'bg-gray-100 text-black' : 'text-gray-100 hover:bg-gray-100 hover:text-black'}`}
                    >
                        {translations('common.otherWorks')}
                    </Link>

                    <Link href="/biography"
                          className={`text-xs sm:text-sm md:text-base lg:text-base font-semibold rounded py-2 px-4 
                                  ${pathname === '/biography' ? 'bg-gray-100 text-black' : 'text-gray-100 hover:bg-gray-100 hover:text-black'}`}
                    >
                        {translations('common.biography')}
                    </Link>

                    <a href={galleryLink}
                       className="text-xs sm:text-sm md:text-base lg:text-base text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4">
                        {translations('common.gallery')}
                    </a>
                </div>
            </div>
        </nav>
    );
};
