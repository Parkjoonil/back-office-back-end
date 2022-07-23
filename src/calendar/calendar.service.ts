import { Injectable } from '@nestjs/common';
import { ICalendarDTO } from 'src/interface/dtos/calendar.dto';
import { CalendarEntity } from 'src/models/entity/calendar.entity';
import { Between, Equal } from 'typeorm';

@Injectable()
export class CalendarService {
    async getCalendars(): Promise<CalendarEntity[]> {
        const calendars = await CalendarEntity.find();

        return calendars;
    }

    async getSortCalendars(year: string, month: string, employeeid: number): Promise<CalendarEntity[]> {
        const calendars = await CalendarEntity.find({
            where: {
                date: Between(`${year}-${month}-01`, `${year}-${month}-31`),
                employeename_id: Equal(`${employeeid}`)
            }
        });

        return calendars;
    }

    async getSortCalendarsName(employeeid: number): Promise<CalendarEntity[]> {
        const calendars = await CalendarEntity.find({
            where: {
                employeename_id: Equal(`${employeeid}`),
            }
        });

        return calendars;
    }

    async getCalendar(id: number): Promise<CalendarEntity> {
        const calendar = await CalendarEntity.findOne({where: {id}});

        return calendar;
    }

    async save(body: ICalendarDTO.Request.CreateCalendar): Promise<CalendarEntity> {
        const calendar = new CalendarEntity();
        calendar.date = body.date;
        calendar.attendancetime = body.attendancetime;
        calendar.reference = body.reference;
        calendar.status = body.status;
        calendar.employeename_id = body.employeename_id;
        calendar.save();

        return calendar;
    }

}
