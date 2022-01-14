
export interface MenuDetail {
    name: string,
    url: string
  }

export interface IMenuModel {
    id: number;
    name: string;
    icon: string;
    // detail: MenuDetail[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;

    
    
}

