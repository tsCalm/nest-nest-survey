import { QuestionUpdateInput, QuestionUpdateOutput } from '../types';

export type QuestionUpdateInPortInputDto = QuestionUpdateInput;
export type QuestionUpdateInPortOutputDto = QuestionUpdateOutput;

// provider token
export const UPDATE_QUESTION_INBOUND_PORT =
  'UPDATE_QUESTION_INBOUND_PORT' as const;

export interface UpdateQuestionInPort {
  execute(
    params: QuestionUpdateInPortInputDto,
  ): Promise<QuestionUpdateInPortOutputDto>;
}
