import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IShareinfoDTO } from 'src/interface/dtos/shareinfo.dto';
import { ShareinfoService } from './shareinfo.service';

@Controller()
@ApiTags('공유 정보')
export class ShareinfoController {

    constructor(
        private shareinfoService: ShareinfoService
    ) {

    }

    @Get()
    @ApiOperation({
        summary: '공유 정보 조회',
        description: '공유 정보 리스트를 조회합니다.'
    })
    async getshareinfo(): Promise<IShareinfoDTO.Response.Shareinfo[]>{
       
        const shareinfos = await this.shareinfoService.getShareinfos();

        return shareinfos
    }

    @Post()
    @ApiOperation({
        summary: '공유 정보 조회',
        description: '공유 정보 리스트를 조회합니다.'
    })
    async createShareinfo(
        @Body() body: IShareinfoDTO.Request.CreateShareinfo
    ): Promise<IShareinfoDTO.Response.Shareinfo>{
       
        const shareinfo = await this.shareinfoService.save(body);

        return shareinfo
    }

    @Delete(':id')
    @ApiOperation({
        summary: '공유 정보 조회',
        description: '공유 정보 리스트를 조회합니다.'
    })
    async deleteShareinfo(
        @Param('id') id: number
    ): Promise<IShareinfoDTO.Response.Shareinfo>{
       
        const shareinfo = await this.shareinfoService.delete(id);

        return shareinfo
    }
}
