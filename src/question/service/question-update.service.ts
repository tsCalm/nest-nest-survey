import { Inject, Injectable } from '@nestjs/common';
import {
  QuestionUpdateInPortInputDto,
  QuestionUpdateInPortOutputDto,
  UpdateQuestionInPort,
} from '../in-port/question-update.ip';
import {
  UpdateQuestionOutPort,
  UPDATE_QUESTION_OUTBOUND_PORT,
} from '../out-port/question-update.op';

@Injectable()
export class QuestionUpdateService implements UpdateQuestionInPort {
  constructor(
    @Inject(UPDATE_QUESTION_OUTBOUND_PORT)
    private readonly updateQuestionOutPort: UpdateQuestionOutPort,
  ) {}

  execute(
    params: QuestionUpdateInPortInputDto,
  ): Promise<QuestionUpdateInPortOutputDto> {
    return this.updateQuestionOutPort.execute(params);
  }
}
