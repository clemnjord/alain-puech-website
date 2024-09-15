import React, {useState} from 'react';
import {getDaysInMonth} from 'date-fns';
import {useLocale} from 'next-intl';
import {addDays} from 'date-fns';
import {Locale} from '@/i18n/routing';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

interface DayMonthPickerProps {
    initialDate: {day: number; month: number};
    handleDateChange: (date: {day: number; month: number}) => void;
}

const DayMonthPicker: React.FC<DayMonthPickerProps> = ({initialDate, handleDateChange}) => {
    const [day, setDay] = useState<number>(initialDate.day);
    const [month, setMonth] = useState<number>(initialDate.month);

    const currentLocale = useLocale() as Locale;

    // Get the number of days in a specific month
    const daysInMonth = (month: number) => {
        return getDaysInMonth(new Date(2020, month)); // Using 2020 to account for leap year
    };

    // Handle a change of month in the month select element
    const handleSelectMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMonth = parseInt(event.target.value, 10);
        const validDay = Math.min(initialDate.day, daysInMonth(selectedMonth));
        setMonth(selectedMonth)
        setDay(validDay);
        handleDateChange({day: validDay, month: selectedMonth});
    };

    // Handle a change of day in the day select element
    const handleSelectDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDay = parseInt(event.target.value, 10);
        setDay(selectedDay);
        handleDateChange({day: selectedDay, month: initialDate.month});
    };

    // Handle a click on a before or after button to change of +/- 1 day
    const changeNeighborDay = (dayDiff: number) => {
        const newDate = addDays(new Date(2020, initialDate.month, initialDate.day), dayDiff);
        setMonth(newDate.getMonth())
        setDay(newDate.getDate())
        handleDateChange({day: newDate.getDate(), month: newDate.getMonth()});
    };

    return (
        <div className="flex items-center justify-center space-x-2">
            <FaArrowAltCircleLeft onClick={() => changeNeighborDay(-1)} />

            {/* Month Selector */}
            <select
                value={month}
                onChange={handleSelectMonthChange}
                className="w-48 border text-black border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {/* TODO: Use internationalization for the select month help sentence. */}
                <option value="" disabled>Select month</option>
                {Array.from({length: 12}, (_, i) => (
                    <option key={i} value={i}>
                        {new Date(0, i).toLocaleString(currentLocale, {month: 'long'})}
                    </option>
                ))}
            </select>

            {/* Day Selector */}
            <select
                value={day}
                onChange={handleSelectDayChange}
                className="w-48 border text-black border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {/* TODO: Use internationalization for the select day help sentence. */}
                <option value="" disabled>Select day</option>
                {Array.from({length: daysInMonth(month)}, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>


            <FaArrowAltCircleRight onClick={() => changeNeighborDay(1)} />
        </div>
    );
};

export default DayMonthPicker;
