import { Injectable } from '@nestjs/common';
import { IShareinfoDTO } from 'src/interface/dtos/shareinfo.dto';
import { ShareinfoEntity } from 'src/models/entity/shareinfo.entity';

@Injectable()
export class ShareinfoService {
    
    async getShareinfos(): Promise<ShareinfoEntity[]> {
        const shareinfos = await ShareinfoEntity.find();

        return shareinfos;
    }

    async save(body: IShareinfoDTO.Request.CreateShareinfo): Promise<ShareinfoEntity> {
        const shareinfo = new ShareinfoEntity();
        shareinfo.color = body.color;
        shareinfo.information = body.information;
        shareinfo.name = body.name;
        shareinfo.type = body.type;
        shareinfo.save();

        return shareinfo;
    }

    async delete(id: number): Promise<ShareinfoEntity> {
        const shareinfo = await ShareinfoEntity.findOne({
            where: {
                id
            }
        });
        shareinfo.softRemove();

        return shareinfo;
    }

}
