import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config-module';
import { OptionModule } from './option/option.module';
import { QuestionModule } from './question/question.module';
import { ResponseModule } from './respondent-res/response.module';
import { RespondentModule } from './respondent/respondent.module';
import { SurveyModule } from './survey/survey.module';

@Module({
  imports: [
    ConfigModule,
    SurveyModule,
    QuestionModule,
    OptionModule,
    RespondentModule,
    ResponseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
