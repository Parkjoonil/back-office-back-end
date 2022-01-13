import { Injectable } from '@nestjs/common';
import { MenuEntity } from 'src/models/entity/menu.entity';

@Injectable()
export class MenuService {
    async getMenu(): Promise<MenuEntity[]> {
        const menu = await MenuEntity.find();

        return menu;
    }
}
