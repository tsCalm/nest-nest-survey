import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TypeOrmExceptionFilter } from './common/filter/typeorm-exception.filter';
import { TypeExceptionFilter } from './common/filter/type-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors();
  app.useGlobalFilters(new TypeOrmExceptionFilter(), new TypeExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('설문조사 스웨거')
    .setDescription('api 설명서')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000).then(async () => {
    console.log(`port: ${3000} server start!!`);
  });
}
bootstrap();
