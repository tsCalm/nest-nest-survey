import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CREATE_QUESTION_INBOUND_PORT } from './in-port/question-create.ip';
import { DELETE_QUESTION_INBOUND_PORT } from './in-port/question-delete.ip';
import { FINDALL_QUESTION_INBOUND_PORT } from './in-port/question-findall.ip';
import { FINDONE_QUESTION_INBOUND_PORT } from './in-port/question-findone.ip';
import { SEARCH_QUESTION_INBOUND_PORT } from './in-port/question-search.ip';
import { UPDATE_QUESTION_INBOUND_PORT } from './in-port/question-update.ip';
import { CreateQuestionRepository } from './out-adapter/question-create.repo';
import { DeleteQuestionRepository } from './out-adapter/question-delete.repo';
import { FindAllQuestionRepository } from './out-adapter/question-findall.repo';
import { FindOneQuestionRepository } from './out-adapter/question-findone.repo';
import { SearchQuestionRepository } from './out-adapter/question-search.repo';
import { UpdateQuestionRepository } from './out-adapter/question-update.repo';
import { CREATE_QUESTION_OUTBOUND_PORT } from './out-port/question-create.op';
import { DELETE_QUESTION_OUTBOUND_PORT } from './out-port/question-delete.op';
import { FINDALL_QUESTION_OUTBOUND_PORT } from './out-port/question-findall.op';
import { FINDONE_QUESTION_OUTBOUND_PORT } from './out-port/question-findone.op';
import { SEARCH_QUESTION_OUTBOUND_PORT } from './out-port/question-search.op';
import { UPDATE_QUESTION_OUTBOUND_PORT } from './out-port/question-update.op';
import { QuestionController } from './question.ctrl';
import { Question } from './question.entity';
import { QuestionCreateService } from './service/question-create.service';
import { QuestionDeleteService } from './service/question-delete.service';
import { QuestionFindAllService } from './service/question-findall.service';
import { QuestionFindOneService } from './service/question-findone.service';
import { QuestionSearchService } from './service/question-search.service';
import { QuestionUpdateService } from './service/question-update.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  controllers: [QuestionController],
  providers: [
    {
      provide: FINDALL_QUESTION_INBOUND_PORT,
      useClass: QuestionFindAllService,
    },
    {
      provide: FINDALL_QUESTION_OUTBOUND_PORT,
      useClass: FindAllQuestionRepository,
    },
    {
      provide: FINDONE_QUESTION_INBOUND_PORT,
      useClass: QuestionFindOneService,
    },
    {
      provide: FINDONE_QUESTION_OUTBOUND_PORT,
      useClass: FindOneQuestionRepository,
    },
    {
      provide: CREATE_QUESTION_INBOUND_PORT,
      useClass: QuestionCreateService,
    },
    {
      provide: CREATE_QUESTION_OUTBOUND_PORT,
      useClass: CreateQuestionRepository,
    },
    {
      provide: UPDATE_QUESTION_INBOUND_PORT,
      useClass: QuestionUpdateService,
    },
    {
      provide: UPDATE_QUESTION_OUTBOUND_PORT,
      useClass: UpdateQuestionRepository,
    },
    {
      provide: DELETE_QUESTION_INBOUND_PORT,
      useClass: QuestionDeleteService,
    },
    {
      provide: DELETE_QUESTION_OUTBOUND_PORT,
      useClass: DeleteQuestionRepository,
    },
    {
      provide: SEARCH_QUESTION_INBOUND_PORT,
      useClass: QuestionSearchService,
    },
    {
      provide: SEARCH_QUESTION_OUTBOUND_PORT,
      useClass: SearchQuestionRepository,
    },
  ],
})
export class QuestionModule {}
