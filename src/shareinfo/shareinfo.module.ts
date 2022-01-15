import { Module } from '@nestjs/common';
import { ShareinfoService } from './shareinfo.service';
import { ShareinfoController } from './shareinfo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShareinfoEntity } from 'src/models/entity/shareinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShareinfoEntity])],
  providers: [ShareinfoService],
  controllers: [ShareinfoController]
})
export class ShareinfoModule {}
