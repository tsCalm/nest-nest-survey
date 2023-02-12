import { Module } from '@nestjs/common';
import { SurveyController } from './survey.ctrl';
import { SurveyService } from './service/survey.service';

@Module({
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
