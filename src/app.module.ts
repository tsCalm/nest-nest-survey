import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config-module';
import { SurveyModule } from './survey/survey.module';
import { QuestionModule } from './question/question.module';
import { OptionModule } from './option/option.module';
import { RespondentModule } from './respondent/respondent.module';
import { ResponseModule } from './respondent-res/response.module';

@Module({
  imports: [
    ConfigModule,
    SurveyModule,
    QuestionModule,
    OptionModule,
    RespondentModule,
    ResponseModule,
    CacheModule.register({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
