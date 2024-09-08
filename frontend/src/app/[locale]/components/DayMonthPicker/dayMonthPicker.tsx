import React, {useEffect, useState} from 'react';
import {useLocale} from 'next-intl';
import {Locale} from '@/config';

interface DayMonthPickerProps {
    onDateChange: (date: { day: number; month: number }) => void;
    initialDate?: { day: number; month: number }; // Optional prop for initial date
}


const DayMonthPicker: React.FC<DayMonthPickerProps> = ({ onDateChange, initialDate }) => {
    const [day, setDay] = useState<number | null>(null);
    const [month, setMonth] = useState<number | null>(null);

    const currentLocale = useLocale() as Locale;

    const daysInMonth = (month: number) => {
        return new Date(2020, month, 0).getDate(); // Using 2020 to account for leap year
    };

    useEffect(() => {
        if (initialDate) {
            setDay(initialDate.day);
            setMonth(initialDate.month);
        }
    }, [initialDate]);

    const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDay = parseInt(event.target.value, 10);
        setDay(selectedDay);
        if (month) {
            onDateChange({ day: selectedDay, month });
        }
    };

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMonth = parseInt(event.target.value, 10);
        setMonth(selectedMonth);
        if (day) {
            onDateChange({ day, month: selectedMonth });
        }
    };

    return (
        <div className="flex items-center justify-center space-x-2">

            {/* TODO: Add buttons for going +/- 1 day */}
            {/* Month Selector */}
            <select
                value={month !== null ? month : ""}
                onChange={handleMonthChange}
                className="w-48 border text-black border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {/* TODO: Use internationalization for the select month help sentence. */}
                <option value="" disabled>Select month</option>
                {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i}>
                        {new Date(0, i).toLocaleString(currentLocale, { month: "long" })}
                    </option>
                ))}
            </select>

            {/* Day Selector */}
            {month !== null && (
                <select
                    value={day !== null ? day : ""}
                    onChange={handleDayChange}
                    className="w-48 border text-black border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                {/* TODO: Use internationalization for the select day help sentence. */}
                    <option value="" disabled>Select day</option>
                    {Array.from({ length: daysInMonth(month) }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default DayMonthPicker;
