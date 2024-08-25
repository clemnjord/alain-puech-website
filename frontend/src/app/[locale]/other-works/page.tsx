'use client';

import React from 'react';
import {useTranslations} from 'use-intl';

// TODO: I should merge "histoire et techniques" with "other works" and "biographie" from the previous website
//       There should only be one long parallax page showcasing some of the work nad telling a story, a progression.
export default function OtherWorks() {
    const t = useTranslations();

    return <p>{t('common.otherWorks')}: In progress</p>;
}
