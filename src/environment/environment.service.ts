import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class EnvironmentService {
    constructor(private configService: ConfigService) {}

    getTypeOrmOption(): TypeOrmModuleOptions {
        return {
            type: 'mariadb',
            charset: 'utf8mb4',
            host: this.configService.get('DB_HOST'),
            port: this.configService.get('DB_PORT'),
            username: this.configService.get('DB_USER'),
            password: this.configService.get('DB_PASSWORD'),
            database: this.configService.get('DB_NAME'),
            synchronize: this.configService.get<boolean>('DB_SYNC'),
            logging: true,
            logger: 'advanced-console',
            timezone: '+09:00',
            entities: ['dist/models/**/*.entity.{ts,js}', '/opt/social-media-macro/social-media-macro-backend/dist/models/entity/**/*.entity.{ts,js}'],
            migrations: ['dist/migrations/**/*.{ts,js}', '/opt/social-media-macro/social-media-macro-backend/dist/models/migrations/**/*.{ts,js}'],
            cli: {
                entitiesDir: 'src/models/entity',
                migrationsDir: 'src/models/migrations'
            },
            autoLoadEntities: true,
            namingStrategy: new SnakeNamingStrategy()
        };
    }

    getJwtConfig(): JwtModuleOptions {
        return {
            secret: this.configService.get('JWT_SECRET')
        };
    }

    getEncryptionKey(): string {
        return this.configService.get('ENCRYPTION_KEY');
    }

    getHost(): string {
        return `${this.configService.get('HOST')}:${this.configService.get('PORT')}`;
    }


}
