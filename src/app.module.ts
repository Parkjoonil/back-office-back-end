import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppRoutingModule } from './app-routing.module';
import { DatabaseModule } from './database/database.module';
import { EnvironmentModule } from './environment/environment.module';

@Module({
  imports: [
    EnvironmentModule,
    DatabaseModule,
    HttpModule,
    AppRoutingModule,
  ],
})
export class AppModule {}
