export namespace IMenuDTO {
    export namespace Request {

    }
    export namespace Response {
        export interface Menu {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        }
    }
}
