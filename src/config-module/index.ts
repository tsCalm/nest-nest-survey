import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import envFile from './env.config';
import { typeOrmConfigAsync } from './typeorm.config';

@Module({
  imports: [envFile, TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
})
export class ConfigModule {}
