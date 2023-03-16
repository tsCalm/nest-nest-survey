import { Inject, Injectable } from '@nestjs/common';
import {
  DeleteQuestionInPort,
  QuestionDeleteInPortInputDto,
  QuestionDeleteInPortOutputDto,
} from '../in-port/question-delete.ip';
import {
  DeleteQuestionOutPort,
  DELETE_QUESTION_OUTBOUND_PORT,
} from '../out-port/question-delete.op';

@Injectable()
export class QuestionDeleteService implements DeleteQuestionInPort {
  constructor(
    @Inject(DELETE_QUESTION_OUTBOUND_PORT)
    private readonly _deleteQuestionOutPort: DeleteQuestionOutPort,
  ) {}

  execute(
    params: QuestionDeleteInPortInputDto,
  ): Promise<QuestionDeleteInPortOutputDto> {
    return this._deleteQuestionOutPort.execute(params);
  }
}
