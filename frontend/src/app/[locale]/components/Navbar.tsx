'use client';

import React, {useState} from 'react';
import LanguageSelector from './LanguageSelector';
import './Navbar.css';
import {useTranslations} from 'use-intl';
import {Link} from '@/navigation';

// TODO: The button corresponding to the current page should be highlighted.
// TODO: Create a component site navigation to factorize navigation buttons.
export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const t = useTranslations();
    const galleryLink = 'https://www.jpb-art.fr/';

    return (
        <nav className='bg-black'>
            <div className='max-w-screen-xl flex items-center justify-between mx-auto space-x-0.5 p-4 relative'>
                <div className='flex space-x-2'>
                    {/* Button for small screen width configuration. Hidden when screen width is large. */}
                    <button className='lg:hidden flex items-center text-white ml-auto' onClick={() => setMenuOpen(!menuOpen)}>
                        <img src='/icons/ClarityBarsLine.svg' alt='Menu icon' style={{height: 32, width: 32}} />
                    </button>

                    {/* Site title. Also acts as home button. */}
                    <Link href='/' className='flex items-center'>
                        <div>
                            <span className='text-3xl font-semibold text-white dark:text-white text-nowrap'>{t('common.title')}</span>
                            <br />
                            <span className='text-xl font-light text-white dark:text-white text-nowrap'>{t('common.subtitle')}</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation. Links to rest of the website. Hidden when screen width is small. */}
                <div className='hidden lg:flex space-x-4 ml-auto'>
                    <Link href='/self-portraits' className='text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4'>
                        {t('common.selfPortraits')}
                    </Link>

                    <Link href='/other-works' className='text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4'>
                        {t('common.otherWorks')}
                    </Link>

                    <Link href='/biography' className='text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4'>
                        {t('common.biography')}
                    </Link>

                    <a href={galleryLink} className='text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4'>
                        {t('common.gallery')}
                    </a>
                </div>

                <LanguageSelector />
            </div>

            {/* Navigation menu items when screen width is small. Links to rest of the website. */}
            <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} content-center bg-gray-800 p-4`}>
                <button onClick={() => setMenuOpen(false)}>
                    <Link href='/self-portraits' className='text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4'>
                        {t('common.selfPortraits')}
                    </Link>
                </button>

                <button onClick={() => setMenuOpen(false)}>
                    <Link href='/other-works' className='text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4'>
                        {t('common.otherWorks')}
                    </Link>
                </button>

                <button onClick={() => setMenuOpen(false)}>
                    <Link href='/biography' className='text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4'>
                        {t('common.biography')}
                    </Link>
                </button>

                <button onClick={() => setMenuOpen(false)}>
                    <a href={galleryLink} className='text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4'>
                        {t('common.gallery')}
                    </a>
                </button>
            </div>
        </nav>
    );
};
