'use client';

import React from 'react';
import {useTranslations} from 'use-intl';

export default function Biography() {
    const t = useTranslations();

    return <p>{t('biography.main')}</p>;
}
