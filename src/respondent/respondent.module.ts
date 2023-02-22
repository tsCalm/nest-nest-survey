import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CREATE_RESPONDENT_INBOUND_PORT } from './in-port/respondent-create.ip';
import { FINDALL_RESPONDENT_INBOUND_PORT } from './in-port/respondent-findall.ip';
import { FINDONE_RESPONDENT_INBOUND_PORT } from './in-port/respondent-findone.ip';
import { SEARCH_RESPONDENT_INBOUND_PORT } from './in-port/respondent-search.ip';
import { CreateRespondentRepository } from './out-adapter/respondent-create.repo';
import { FindAllRespondentRepository } from './out-adapter/respondent-findall.repo';
import { FindOneRespondentRepository } from './out-adapter/respondent-findone.repo';
import { SearchRespondentRepository } from './out-adapter/respondent-search.repo';
import { CREATE_RESPONDENT_OUTBOUND_PORT } from './out-port/respondent-create.op';
import { FINDALL_RESPONDENT_OUTBOUND_PORT } from './out-port/respondent-findall.op';
import { FINDONE_RESPONDENT_OUTBOUND_PORT } from './out-port/respondent-findone.op';
import { SEARCH_RESPONDENT_OUTBOUND_PORT } from './out-port/respondent-search.op';
import { RespondentController } from './respondent.ctrl';
import { Respondent } from './respondent.entity';
import { RespondentCreateService } from './service/respondent-create.service';
import { RespondentFindAllService } from './service/respondent-findall.service';
import { RespondentFindOneService } from './service/respondent-findone.service';
import { RespondentSearchService } from './service/respondent-search.service';

@Module({
  imports: [TypeOrmModule.forFeature([Respondent])],
  controllers: [RespondentController],
  providers: [
    {
      provide: FINDALL_RESPONDENT_INBOUND_PORT,
      useClass: RespondentFindAllService,
    },
    {
      provide: FINDALL_RESPONDENT_OUTBOUND_PORT,
      useClass: FindAllRespondentRepository,
    },
    {
      provide: FINDONE_RESPONDENT_INBOUND_PORT,
      useClass: RespondentFindOneService,
    },
    {
      provide: FINDONE_RESPONDENT_OUTBOUND_PORT,
      useClass: FindOneRespondentRepository,
    },
    {
      provide: CREATE_RESPONDENT_INBOUND_PORT,
      useClass: RespondentCreateService,
    },
    {
      provide: CREATE_RESPONDENT_OUTBOUND_PORT,
      useClass: CreateRespondentRepository,
    },
    {
      provide: SEARCH_RESPONDENT_INBOUND_PORT,
      useClass: RespondentSearchService,
    },
    {
      provide: SEARCH_RESPONDENT_OUTBOUND_PORT,
      useClass: SearchRespondentRepository,
    },
  ],
})
export class RespondentModule {}
