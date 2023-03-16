import { QuestionDeleteInput, QuestionDeleteOutput } from '../types';

export type QuestionDeleteOutPortInputDto = QuestionDeleteInput;
export type QuestionDeleteOutPortOutputDto = QuestionDeleteOutput;

export const DELETE_QUESTION_OUTBOUND_PORT =
  'DELETE_QUESTION_OUTBOUND_PORT' as const;

export interface DeleteQuestionOutPort {
  execute(
    params: QuestionDeleteOutPortInputDto,
  ): Promise<QuestionDeleteOutPortOutputDto>;
}
