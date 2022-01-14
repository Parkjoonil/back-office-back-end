import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IMenuDTO } from 'src/interface/dtos/menu.dto';
import { MenuService } from './menu.service';

@Controller()
@ApiTags('메뉴')
export class MenuController {

    constructor(
        private menuService: MenuService
    ) {
        
    }

    @Get()
    @ApiOperation({
        summary: '메뉴 정보 조회',
        description: '메뉴를 조회합니다.'
    })
    async getMenu(): Promise<IMenuDTO.Response.Menu[]> {

        const menu = await this.menuService.getMenu();

        return menu;
    }

}
