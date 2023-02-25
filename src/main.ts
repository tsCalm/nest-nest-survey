import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TypeOrmExceptionFilter } from './common/filter/typeorm-exception.filter';
import { TypeExceptionFilter } from './common/filter/type-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors();
  app.useGlobalFilters(new TypeOrmExceptionFilter(), new TypeExceptionFilter());
  // const port = configService.get('PORT');
  await app.listen(3000).then(async () => {
    console.log(`port: ${3000} server start!!`);
  });
}
bootstrap();
