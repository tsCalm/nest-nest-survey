import { QuestionUpdateInput, QuestionUpdateOutput } from '../types';

export type QuestionUpdateOutPortInputDto = QuestionUpdateInput;
export type QuestionUpdateOutPortOutputDto = QuestionUpdateOutput;

export const UPDATE_QUESTION_OUTBOUND_PORT =
  'UPDATE_QUESTION_OUTBOUND_PORT' as const;

export interface UpdateQuestionOutPort {
  execute(
    params: QuestionUpdateOutPortInputDto,
  ): Promise<QuestionUpdateOutPortOutputDto>;
}
