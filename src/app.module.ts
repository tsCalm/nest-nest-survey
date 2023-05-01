import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './modules/config-module';
import { OptionModule } from './modules/option/option.module';
import { QuestionModule } from './modules/question/question.module';
import { ResponseModule } from './modules/respondent-res/response.module';
import { RespondentModule } from './modules/respondent/respondent.module';
import { SurveyModule } from './modules/survey/survey.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule,
    SurveyModule,
    QuestionModule,
    OptionModule,
    RespondentModule,
    ResponseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
