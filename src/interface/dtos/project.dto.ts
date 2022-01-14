import { Status } from "../models/project.model";

export namespace IProjectDTO {
    export namespace Request {

    }
    export namespace Response {
        export interface Project {
            id: number;
            name: string;
            status: Status;
            startAt?: Date;
            endAt?: Date;
        }
    }
}
