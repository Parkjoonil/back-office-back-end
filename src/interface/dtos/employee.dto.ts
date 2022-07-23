export namespace IEmployeeDTO {
    export namespace Request {
        export interface CreateEmployee {
            lastname: string;
            name: string;
            company: string;
            teamname: string;
            position: string;
            startdate: string;
            birthday: string;
            phone: string;
        }
    }
    export namespace Response {
        export interface Employee {
            id: number;
            lastname: string;
            name: string;
            company: string;
            teamname: string;
            position: string;
            startdate: string;
            birthday: string;
            phone: string;
            createdAt?: Date;
            updatedAt?: Date;
            deletedAt?: Date;
          }
    }
}