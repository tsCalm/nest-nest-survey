import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TypeExceptionFilter } from './common/filter/type-exception.filter';
import { TypeOrmExceptionFilter } from './common/filter/typeorm-exception.filter';
import { ResObj, ResObjList } from './common/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors();
  app.useGlobalFilters(new TypeOrmExceptionFilter(), new TypeExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('설문조사 스웨거')
    .setDescription('api 설명서')
    .setVersion('1.0')

    .build();
  const options: SwaggerDocumentOptions = {
    extraModels: [ResObjList, ResObj],
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);
  const port = await configService.get('PORT');
  await app.listen(port).then(async () => {
    console.log(`port: ${port} server start!!`);
  });
}
bootstrap();
