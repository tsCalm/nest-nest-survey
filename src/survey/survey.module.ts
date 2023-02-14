import { Module } from '@nestjs/common';
import { SurveyController } from './survey.ctrl';
// import { SurveyService } from './service/survey-findall.service';

@Module({
  controllers: [SurveyController],
  providers: [],
})
export class SurveyModule {}
