import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
config();

const configService = new ConfigService();
const option: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  synchronize: false,
  logging: true,
  entities: ['src/**/*.entity.ts'],
  seeds: ['src/**/seed/*.ts'],
  factories: ['src/**/factory/*.ts'],
  // migrations: ['src/database/migrations/*.ts'],
  // migrationsTableName: 'migrations',
};
export default new DataSource(option);
