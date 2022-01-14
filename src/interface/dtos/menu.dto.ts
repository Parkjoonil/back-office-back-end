export namespace IMenuDTO {
    export namespace Request {

    }
    export namespace Response {
        export interface Menu {
            id: number;
            name: string;
            icon: string;
            // detail: MenuDetail[];
        }

        
    }

    interface MenuDetail {
        name: string,
        url: string
      }
}
