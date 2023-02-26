import { QuestionCreateInput, QuestionCreateOutput } from '../types';

export type QuestionCreateInPortInputDto = QuestionCreateInput;
export type QuestionCreateInPortOutputDto = QuestionCreateOutput;

// provider token
export const CREATE_QUESTION_INBOUND_PORT =
  'CREATE_QUESTION_INBOUND_PORT' as const;

export interface CreateQuestionInPort {
  execute(
    params: QuestionCreateInPortInputDto,
  ): Promise<QuestionCreateInPortOutputDto>;
}
