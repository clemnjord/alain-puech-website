import {Locale} from '@/i18n/routing';
import {addDays, differenceInCalendarDays, format, isAfter, isBefore, isExists, isSameMonth} from 'date-fns';
import {fr} from 'date-fns/locale/fr';
import {enGB} from 'date-fns/locale/en-GB';

export class SelfPortraitModel {
    private readonly date: Date;
    private readonly imgId: number;
    private readonly imgPath: string;

    public constructor(date: Date, imgId: number, imgPath: string) {
        this.date = date;
        this.imgId = imgId;
        this.imgPath = imgPath;
    }

    public getIntlDateString(locale: Locale): string {
        if (locale === 'fr') {
            return format(
                this.date,
                'EEEE, dd MMMM yyyy',
                {locale: fr},
            );
        }

        return format(
            this.date,
            'EEEE, dd MMMM yyyy',
            {locale: enGB},
        );
    }

    public getImagePath() {
        return this.imgPath;
    }

    public getImgId(): number {
        return this.imgId;
    }
}

export class SelfPortraitsBuilder {
    private static originDate = new Date(2008, 3, 10);

    // TODO: Find a better way to check max existing selfportrait date
    //       * Modify this date dynamically with an API?
    //       * Use envvar and restart container monthly?
    private static maxDate = new Date(2022, 8, 30);


    private static getIdFromDate(date: Date): number {
        return differenceInCalendarDays(date, this.originDate);
    }

    private static getImgPathFromDate(date: Date): string {
        return '/content/self-portraits/' + date.getFullYear().toString() + '/Autoportrait%20-' + ('0000' + this.getIdFromDate(date)).slice(-4) + '.jpg';
    }

    static generateDaySelfPortraits(date: Date): SelfPortraitModel[] {
        let selfPortraits: SelfPortraitModel[] = [];

        let possibleDate = this.nextPossibleDate(date.getFullYear(), date.getMonth(), date.getDate());

        while (possibleDate.found) {
            if(this.checkImageExists(possibleDate.date)) {
                selfPortraits.push(new SelfPortraitModel(possibleDate.date, this.getIdFromDate(possibleDate.date), this.getImgPathFromDate(possibleDate.date)));
            }
            possibleDate = this.nextPossibleDate(possibleDate.date.getFullYear() + 1, date.getMonth(), date.getDate());
        }

        // Reverse to get latest self-portrait first
        return selfPortraits.reverse();
    }

    private static nextPossibleDate(year: number, month: number, day: number): {found: boolean, date: Date} {
        let found = false;

        while(isBefore(new Date(year, month, day), this.originDate)) {
            year++;
        }

        while (!found && year <= SelfPortraitsBuilder.maxDate.getFullYear()) {
            if (isExists(year, month, day)) {
                found = true;
            } else {
                year++;
            }
        }

        return {found: found, date: new Date(year, month, day)};
    }

    static generateMonthSelfPortraits(date: Date): SelfPortraitModel[] {
        let selfPortraits: SelfPortraitModel[] = [];

        let tempDate = new Date(date.getFullYear(), date.getMonth(), 1);
        while (isSameMonth(date, tempDate)) {
            if (this.checkImageExists(tempDate)) {
                selfPortraits.push(new SelfPortraitModel(tempDate, this.getIdFromDate(tempDate), this.getImgPathFromDate(tempDate)));
            }
            tempDate = addDays(tempDate, 1);
        }

        return selfPortraits;
    }

    private static checkImageExists(date: Date): boolean {
        return !isBefore(date, this.originDate) && !isAfter(date, this.maxDate);
    }
}