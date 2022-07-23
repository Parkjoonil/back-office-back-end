import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ICalendarDTO } from 'src/interface/dtos/calendar.dto';
import { CalendarService } from './calendar.service';


@Controller()
@ApiTags('캘린더')
export class CalendarController {

    constructor(
        private calendarService: CalendarService
    ) {

    }

    @Get()
    @ApiOperation({
        summary: '출석 조회',
        description: '출석 리스트를 조회합니다.'
    })
    async getCalendars(): Promise<ICalendarDTO.Response.Calendar[]>{
       
        const calendars = await this.calendarService.getCalendars();

        return calendars;
    }

    @Get('sort')
    @ApiOperation({
        summary: '특정 달 출석 조회',
        description: '특정 달의 출석 리스트를 조회합니다.'
    })
    async getSortCalendars(
            @Query('year') year: string,
            @Query('month') month: string,
            @Query('employeeid') employeeid: number,
        ): Promise<ICalendarDTO.Response.Calendar[]>{
       
        const calendars = await this.calendarService.getSortCalendars(year, month, employeeid);

        return calendars
    }

    @Get('sortname')
    @ApiOperation({
        summary: '개인 모든 출석 조회',
        description: '개인의 모든 출석 리스트를 조회합니다.'
    })
    async getSortCalendarsName(
            @Query('employeeid') employeeid: number,
        ): Promise<ICalendarDTO.Response.Calendar[]>{
       
        const calendars = await this.calendarService.getSortCalendarsName(employeeid);

        return calendars
    }

    @Post()
    @ApiOperation({
        summary: '출석 저장',
        description: '출석을 저장합니다.'
    })
    async createcalendar(
        @Body() body: ICalendarDTO.Request.CreateCalendar
    ): Promise<ICalendarDTO.Response.Calendar>{
       
        const calendars = await this.calendarService.save(body);

        return calendars
    }

}
