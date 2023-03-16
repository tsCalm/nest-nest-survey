import { QuestionCreateInput, QuestionCreateOutput } from '../types';

export type QuestionCreateOutPortInputDto = QuestionCreateInput;
export type QuestionCreateOutPortOutputDto = QuestionCreateOutput;

export const CREATE_QUESTION_OUTBOUND_PORT =
  'CREATE_QUESTION_OUTBOUND_PORT' as const;

export interface CreateQuestionOutPort {
  execute(
    params: QuestionCreateOutPortInputDto,
  ): Promise<QuestionCreateOutPortOutputDto>;
}
