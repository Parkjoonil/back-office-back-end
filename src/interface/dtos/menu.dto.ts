export namespace IMenuDTO {
    export namespace Request {

    }
    export namespace Response {
        export interface Menu {
            id: number;
            name: string;
            icon: string;
            
        }

        export interface MenuDetail {
            name: string,
            url: string
          }
    }
}
