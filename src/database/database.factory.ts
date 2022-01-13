import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentService } from 'src/environment/environment.service';

@Injectable()
export class DatabaseFactory {

    constructor(private environmentService: EnvironmentService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return this.environmentService.getTypeOrmOption();
    }

}
