import { QuestionDeleteInput, QuestionDeleteOutput } from '../types';

export type QuestionDeleteInPortInputDto = QuestionDeleteInput;

export type QuestionDeleteInPortOutputDto = QuestionDeleteOutput;

// provider token
export const DELETE_QUESTION_INBOUND_PORT =
  'DELETE_QUESTION_INBOUND_PORT' as const;

export interface DeleteQuestionInPort {
  execute(
    params: QuestionDeleteInPortInputDto,
  ): Promise<QuestionDeleteInPortOutputDto>;
}
