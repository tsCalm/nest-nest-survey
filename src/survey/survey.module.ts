import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CREATE_SURVEY_INBOUND_PORT } from './in-port/survey-create.ip';
import { DELETE_SURVEY_INBOUND_PORT } from './in-port/survey-delete.ip';
import { FINDALL_SURVEY_INBOUND_PORT } from './in-port/survey-findall.ip';
import { FINDONE_SURVEY_INBOUND_PORT } from './in-port/survey-findone.ip';
import { SEARCH_SURVEY_INBOUND_PORT } from './in-port/survey-search.ip';
import { UPDATE_SURVEY_INBOUND_PORT } from './in-port/survey-update.ip';
import { SurveyCreateService } from './service/survey-create.service';
import { SurveyDeleteService } from './service/survey-delete.service';
import { SurveyFindAllService } from './service/survey-findall.service';
import { SurveyFindOneService } from './service/survey-findone.service';
import { SurveySearchService } from './service/survey-search.service';
import { SurveyUpdateService } from './service/survey-update.service';
import { SurveyController } from './survey.ctrl';
import { Survey } from './survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  controllers: [SurveyController],
  providers: [
    {
      provide: FINDALL_SURVEY_INBOUND_PORT,
      useClass: SurveyFindAllService,
    },
    // {
    //   provide: FINDALL_SURVEY_OUTBOUND_PORT,
    //   useClass: FindAllSurveyRepository,
    // },
    {
      provide: FINDONE_SURVEY_INBOUND_PORT,
      useClass: SurveyFindOneService,
    },
    // {
    //   provide: FINDONE_SURVEY_OUTBOUND_PORT,
    //   useClass: FindOneSurveyRepository,
    // },
    {
      provide: CREATE_SURVEY_INBOUND_PORT,
      useClass: SurveyCreateService,
    },
    // {
    //   provide: CREATE_SURVEY_OUTBOUND_PORT,
    //   useClass: CreateSurveyRepository,
    // },
    {
      provide: UPDATE_SURVEY_INBOUND_PORT,
      useClass: SurveyUpdateService,
    },
    // {
    //   provide: UPDATE_SURVEY_OUTBOUND_PORT,
    //   useClass: UpdateSurveyRepository,
    // },
    {
      provide: DELETE_SURVEY_INBOUND_PORT,
      useClass: SurveyDeleteService,
    },
    // {
    //   provide: DELETE_SURVEY_OUTBOUND_PORT,
    //   useClass: DeleteSurveyRepository,
    // },
    {
      provide: SEARCH_SURVEY_INBOUND_PORT,
      useClass: SurveySearchService,
    },
    // {
    //   provide: SEARCH_SURVEY_OUTBOUND_PORT,
    //   useClass: SearchSurveyRepository,
    // },
  ],
})
export class SurveyModule {}
