import { Inject, Injectable } from '@nestjs/common';
import {
  CreateQuestionInPort,
  QuestionCreateInPortInputDto,
  QuestionCreateInPortOutputDto,
} from '../in-port/question-create.ip';
import { CreateQuestionOutPort } from '../out-port/question-create.op';
import { CREATE_QUESTION_OUTBOUND_PORT } from '../out-port/question-create.op';

@Injectable()
export class QuestionCreateService implements CreateQuestionInPort {
  constructor(
    @Inject(CREATE_QUESTION_OUTBOUND_PORT)
    private readonly createQuestionOutPort: CreateQuestionOutPort,
  ) {}
  execute(
    params: QuestionCreateInPortInputDto,
  ): Promise<QuestionCreateInPortOutputDto> {
    return this.createQuestionOutPort.execute(params);
  }
}
