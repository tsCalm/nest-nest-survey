import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CREATE_SURVEY_INBOUND_PORT } from './in-port/survey-create.ip';
import { DELETE_SURVEY_INBOUND_PORT } from './in-port/survey-delete.ip';
import { FINDALL_SURVEY_INBOUND_PORT } from './in-port/survey-findall.ip';
import { FINDONE_SURVEY_INBOUND_PORT } from './in-port/survey-findone.ip';
import { SEARCH_SURVEY_INBOUND_PORT } from './in-port/survey-search.ip';
import { UPDATE_SURVEY_INBOUND_PORT } from './in-port/survey-update.ip';
import { CreateSurveyRepository } from './out-adapter/survey-create.repo';
import { DeleteSurveyRepository } from './out-adapter/survey-delete.repo';
import { FindAllSurveyRepository } from './out-adapter/survey-findall.repo';
import { FindOneSurveyRepository } from './out-adapter/survey-findone.repo';
import { SearchSurveyRepository } from './out-adapter/survey-search.repo';
import { UpdateSurveyRepository } from './out-adapter/survey-update.repo';
import { CREATE_SURVEY_OUTBOUND_PORT } from './out-port/survey-create.op';
import { DELETE_SURVEY_OUTBOUND_PORT } from './out-port/survey-delete.op';
import { FINDALL_SURVEY_OUTBOUND_PORT } from './out-port/survey-findall.op';
import { FINDONE_SURVEY_OUTBOUND_PORT } from './out-port/survey-findone.op';
import { SEARCH_SURVEY_OUTBOUND_PORT } from './out-port/survey-search.op';
import { UPDATE_SURVEY_OUTBOUND_PORT } from './out-port/survey-update.op';
import { SurveyCreateService } from './service/survey-create.service';
import { SurveyDeleteService } from './service/survey-delete.service';
import { SurveyFindAllService } from './service/survey-findall.service';
import { SurveyFindOneService } from './service/survey-findone.service';
import { SurveySearchService } from './service/survey-search.service';
import { SurveyUpdateService } from './service/survey-update.service';
import { SurveyController } from './survey.ctrl';
import { Survey } from './survey.entity';
// import { SurveyService } from './service/survey-findall.service';
import {
  CustomCacheModule,
  customProviders,
} from '../cache-module/cache.module';
import { RedisCacheInterceptor } from '../../common/interceptors/custom-cache.interceptor';

@Module({
  imports: [CustomCacheModule, TypeOrmModule.forFeature([Survey])],
  controllers: [SurveyController],
  providers: [
    {
      provide: FINDALL_SURVEY_INBOUND_PORT,
      useClass: SurveyFindAllService,
    },
    {
      provide: FINDALL_SURVEY_OUTBOUND_PORT,
      useClass: FindAllSurveyRepository,
    },
    {
      provide: FINDONE_SURVEY_INBOUND_PORT,
      useClass: SurveyFindOneService,
    },
    {
      provide: FINDONE_SURVEY_OUTBOUND_PORT,
      useClass: FindOneSurveyRepository,
    },
    {
      provide: CREATE_SURVEY_INBOUND_PORT,
      useClass: SurveyCreateService,
    },
    {
      provide: CREATE_SURVEY_OUTBOUND_PORT,
      useClass: CreateSurveyRepository,
    },
    {
      provide: UPDATE_SURVEY_INBOUND_PORT,
      useClass: SurveyUpdateService,
    },
    {
      provide: UPDATE_SURVEY_OUTBOUND_PORT,
      useClass: UpdateSurveyRepository,
    },
    {
      provide: DELETE_SURVEY_INBOUND_PORT,
      useClass: SurveyDeleteService,
    },
    {
      provide: DELETE_SURVEY_OUTBOUND_PORT,
      useClass: DeleteSurveyRepository,
    },
    {
      provide: SEARCH_SURVEY_INBOUND_PORT,
      useClass: SurveySearchService,
    },
    {
      provide: SEARCH_SURVEY_OUTBOUND_PORT,
      useClass: SearchSurveyRepository,
    },
    RedisCacheInterceptor,
    ...customProviders,
  ],
})
export class SurveyModule {}
