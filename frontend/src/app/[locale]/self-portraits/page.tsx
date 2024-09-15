import {redirect} from '@/i18n/routing';

export default function SelfPortraits() {
    const date = new Date();

    redirect({
        pathname: '/self-portraits/daily-view/[month]/[day]', params: {
            day: date.getDate(), month: date.getMonth(),
        },
    });
}
