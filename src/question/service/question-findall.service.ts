import { Inject, Injectable } from '@nestjs/common';
import {
  FindAllQuestionInPort,
  QuestionFindAllInPortInputDto,
  QuestionFindAllInPortOutputDto,
} from '../in-port/question-findall.ip';
import {
  FindAllQuestionOutPort,
  FINDALL_QUESTION_OUTBOUND_PORT,
} from '../out-port/question-findall.op';

@Injectable()
export class QuestionFindAllService implements FindAllQuestionInPort {
  constructor(
    @Inject(FINDALL_QUESTION_OUTBOUND_PORT)
    private readonly findAllQuestionOutPort: FindAllQuestionOutPort,
  ) {}
  execute(
    params: QuestionFindAllInPortInputDto,
  ): Promise<QuestionFindAllInPortOutputDto> {
    return this.findAllQuestionOutPort.execute(params);
  }
}
