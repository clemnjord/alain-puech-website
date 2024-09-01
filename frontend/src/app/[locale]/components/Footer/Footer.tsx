'use client';

import React from 'react';
import {useTranslations} from 'use-intl';

const Footer: React.FC = () => {
    const t = useTranslations();

    return (
        <footer className="text-white py-4 text-center text-xs">
            <hr className="w-full max-w-sm h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <p>{t('common.copyright')}</p>
        </footer>
    );
};

export default Footer;
