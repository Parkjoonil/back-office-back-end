export namespace ICalendarDTO {
    export namespace Request {
        export interface CreateCalendar {
            id: number;
            date: string;
            attendancetime: string;
            reference: string;
            status: number;
            employeename_id: number;
        }

    }
    export namespace Response {
        export interface Calendar {
            id: number;
            date: string;
            attendancetime: string;
            reference: string;
            status: number;

        }

        
    }

}