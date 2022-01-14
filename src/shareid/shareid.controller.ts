import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IShareidDTO } from 'src/interface/dtos/shareid.dto';
import { ShareidService } from './shareid.service';

@Controller()
@ApiTags('공유 아이디')
export class ShareidController {

    constructor(
        private shareidService: ShareidService
    ) {

    }

    @Get()
    @ApiOperation({
        summary: '공유 아이디 정보 조회',
        description: '공유 아이디 리스트를 조회합니다.'
    })
    async getshareid(): Promise<IShareidDTO.Response.Shareid[]>{
       
        const shareids = await this.shareidService.getShareids();

        return shareids
    }
}
