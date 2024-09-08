'use client';

import React from 'react';
import {useTranslations} from 'use-intl';

export default function Biography() {
    const translations = useTranslations();

    return <p>{translations('biography.main')}</p>;
}
