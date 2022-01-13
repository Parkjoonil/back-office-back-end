import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';

let disableKeepAlive = false;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    logger: [
        'log',
        'error',
        'warn'
    ]
  });

  app.use((req, res, next) => {
        if (disableKeepAlive) {
            res.set('Connection', 'close');
        }
        next();
    });
    process.on('SIGINT', async () => {
        disableKeepAlive = true;
        await app.close();
        process.exit(0);
    });

    if (process.env.NODE_ENV === 'production') {
        app.useStaticAssets('public', {
            setHeaders: (res, path, stat) => {
                res.set('Access-Control-Allow-Origin', '*');
            }
        });
    } else {
        app.useStaticAssets(join(__dirname, '..', 'public'), {
            setHeaders: (res, path, stat) => {
                res.set('Access-Control-Allow-Origin', '*');
            }
        });
    }

    app.setGlobalPrefix('api');

    const documentConfig = new DocumentBuilder()
        .setTitle('Lepisode Back Office API')
        .setVersion('0.0.1')
        .addBearerAuth()
        .addServer('http://localhost:3005')
        .build();

    const document = SwaggerModule.createDocument(app, documentConfig);
    SwaggerModule.setup('document', app, document);

    await app.listen(3005, () => {
        if (process.send) {
            process.send('ready');
        }
    });
}
bootstrap();
