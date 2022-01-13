import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentService } from './environment.service';

const envFilePath =
    process.env.NODE_ENV === 'production'
        ? '.env.production'
        : '.env.local';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ envFilePath })],
  providers: [EnvironmentService],
  exports: [EnvironmentService]

})
export class EnvironmentModule {}
