import { Module } from '@nestjs/common';
import { ShareidService } from './shareid.service';
import { ShareidController } from './shareid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShareidEntity } from 'src/models/entity/shareid.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShareidEntity])],
  providers: [ShareidService],
  controllers: [ShareidController]
})
export class ShareidModule {}
