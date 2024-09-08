'use client';

import React from 'react';
import DaySelfPortraits from '@/app/[locale]/self-portraits/day-self-portraits';
import {useTranslations} from 'use-intl';

// TODO: The default date should be the date of the day
// TODO: Add month view (same page with a switcher, or different pages ?)
export default function SelfPortraits() {
    const translations = useTranslations();
    const [dayView, setDayView] = React.useState(true);

    const changeView = () => {
        setDayView(!dayView);
    }

    return (
        <div className={'flex max-w-screen-xl flex-col items-center justify-center mx-auto space-y-6 p-1'}>
            <span>
                {translations.rich('self-portrait.main', {
                    br: () => <br />
                })}
            </span>

            <hr className="w-full max-w-sm h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />


            <div className="flex space-x-2 z-0">
                <button
                    type="button"
                    className={`${
                        dayView ? 'font-bold' : 'font-normal'
                    } focus:outline-none`}
                    onClick={() => changeView()}
                >
                    {translations("self-portrait.dayView")}
                    Day view
                </button>
                <span>|</span>
                <button
                    type="button"
                    className={`${
                        dayView ? 'font-normal' : 'font-bold'
                    } focus:outline-none`}
                    onClick={() => changeView()}
                >
                    {translations("self-portrait.monthView")}
                </button>
            </div>

            {dayView && (
                <DaySelfPortraits />
            )}

            {!dayView && (
                <span>Month view : Todo</span>
            )}

        </div>

    );
}
