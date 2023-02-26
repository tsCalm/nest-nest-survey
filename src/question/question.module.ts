import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CREATE_QUESTION_INBOUND_PORT } from './in-port/question-create.ip';
import { DELETE_QUESTION_INBOUND_PORT } from './in-port/question-delete.ip';
import { UPDATE_QUESTION_INBOUND_PORT } from './in-port/question-update.ip';
import { CreateQuestionRepository } from './out-adapter/question-create.repo';
import { DeleteQuestionRepository } from './out-adapter/question-delete.repo';
import { UpdateQuestionRepository } from './out-adapter/question-update.repo';
import { CREATE_QUESTION_OUTBOUND_PORT } from './out-port/question-create.op';
import { DELETE_QUESTION_OUTBOUND_PORT } from './out-port/question-delete.op';
import { UPDATE_QUESTION_OUTBOUND_PORT } from './out-port/question-update.op';
import { QuestionController } from './question.ctrl';
import { Question } from './question.entity';
import { QuestionCreateService } from './service/question-create.service';
import { QuestionDeleteService } from './service/question-delete.service';
import { QuestionUpdateService } from './service/question-update.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  controllers: [QuestionController],
  providers: [
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
  ],
})
export class QuestionModule {}
