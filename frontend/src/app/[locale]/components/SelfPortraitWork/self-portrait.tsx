'use client';

import React from 'react';
import Image from 'next/image';
import {SelfPortraitModel} from '@/models/selfPortraitModel';
import {useLocale} from 'next-intl';
import {Locale} from '@/i18n/routing';

interface SelfPortraitProps {
    selfPortrait: SelfPortraitModel;
}

// Is it really a selfportrait, or rather how I want to display all pictures ?
// Like they are in a museum or something, with their labels alongside
const SelfPortrait: React.FC<SelfPortraitProps> = ({selfPortrait}) => {
    const currentLocale = useLocale() as Locale;

    return (
        <div>
            <Image alt={selfPortrait.getIntlDateString(currentLocale)} src={selfPortrait.getImagePath()} width={300}
                   height={400}
            />
            <span>{selfPortrait.getIntlDateString(currentLocale)}</span>
        </div>
    );
};

export default SelfPortrait;