import { Inject, Injectable } from '@nestjs/common';
import {
  QuestionSearchInPortInputDto,
  QuestionSearchInPortOutputDto,
  SearchQuestionInPort,
} from '../in-port/question-search.ip';
import {
  SearchQuestionOutPort,
  SEARCH_QUESTION_OUTBOUND_PORT,
} from '../out-port/question-search.op';

@Injectable()
export class QuestionSearchService implements SearchQuestionInPort {
  constructor(
    @Inject(SEARCH_QUESTION_OUTBOUND_PORT)
    private readonly searchQuestionOutPort: SearchQuestionOutPort,
  ) {}

  execute(
    params: QuestionSearchInPortInputDto,
  ): Promise<QuestionSearchInPortOutputDto> {
    return this.searchQuestionOutPort.execute(params);
  }
}
