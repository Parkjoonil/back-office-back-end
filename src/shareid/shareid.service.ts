import { Injectable } from '@nestjs/common';
import { ShareidEntity } from 'src/models/entity/shareid.entity';

@Injectable()
export class ShareidService {
    
    async getShareids(): Promise<ShareidEntity[]> {
        const shareids = await ShareidEntity.find();

        return shareids;
    }
}
