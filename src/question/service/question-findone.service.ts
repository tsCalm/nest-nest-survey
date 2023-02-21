import { Inject, Injectable } from '@nestjs/common';
import {
  FindOneQuestionInPort,
  QuestionFindOneInPortInputDto,
  QuestionFindOneInPortOutputDto,
} from '../in-port/question-findone.ip';
import {
  FindOneQuestionOutPort,
  FINDONE_QUESTION_OUTBOUND_PORT,
} from '../out-port/question-findone.op';

@Injectable()
export class QuestionFindOneService implements FindOneQuestionInPort {
  constructor(
    @Inject(FINDONE_QUESTION_OUTBOUND_PORT)
    private readonly findOneQuestionOutPort: FindOneQuestionOutPort,
  ) {}

  execute(
    params: QuestionFindOneInPortInputDto,
  ): Promise<QuestionFindOneInPortOutputDto> {
    return this.findOneQuestionOutPort.execute(params);
  }
}
