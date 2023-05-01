import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserController } from './user.ctrl';
import { User } from './user.entity';
// import { SurveyService } from './service/survey-findall.service';
import { CustomCacheModule } from '../cache-module/cache.module';
import { UserController } from './user.ctrl';

@Module({
  imports: [CustomCacheModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
