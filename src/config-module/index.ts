import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import envFile from './env.config';
// import { typeOrmConfigAsync } from './typeorm.config';
//  TypeOrmModule.forRootAsync(typeOrmConfigAsync)
@Module({
  imports: [envFile],
})
export class ConfigModule {}
