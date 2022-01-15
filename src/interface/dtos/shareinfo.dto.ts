export namespace IShareinfoDTO {
    export namespace Request {
        export interface CreateShareinfo {
            name: string;
            information: string;
            color: string;
            type: string;
        }
    }
    export namespace Response {
        export interface Shareinfo {
            id: number;
            name: string;
            information: string;
            color: string;
            type: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date;
          }
    }
}