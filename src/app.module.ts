import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config-module';
import { SurveyModule } from './survey/survey.module';
import { QuestionModule } from './question/question.module';
import { OptionModule } from './option/option.module';
import { RespondentModule } from './respondent/respondent.module';
import { ResponseModule } from './respondent-res/response.module';
import { CustomCacheModule } from './cache-module/cache.module';
// import { RedisAdapter } from './cache-module/string/adapter/redis-string-get.adapter';

@Module({
  imports: [
    CustomCacheModule,
    ConfigModule,
    SurveyModule,
    QuestionModule,
    OptionModule,
    RespondentModule,
    ResponseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // RedisAdapter
  ],
})
export class AppModule {}
