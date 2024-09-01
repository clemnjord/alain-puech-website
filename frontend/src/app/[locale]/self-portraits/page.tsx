'use client';

import React from 'react';
import DaySelfPortraits from '@/app/[locale]/self-portraits/day-self-portraits';

// TODO: Add date selection
// TODO: The default date should be the date of the day
// TODO: Add month view (same page with a switcher, or different pages ?)
export default function SelfPortraits() {

    return (
        <div>
            <span>Explain the work.</span> <br />
            <span>Day view (default) | Month view</span><br />
            {/* Date selection */}
            <span>Date selection</span>
            <DaySelfPortraits month={3} day={10} />
        </div>

    );
}
