export type QuestionCreateInPortInputDto = {
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
};

export type QuestionCreateInPortOutputDto = {
  id: number;
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
};

// provider token
export const CREATE_QUESTION_INBOUND_PORT =
  'CREATE_QUESTION_INBOUND_PORT' as const;

export interface CreateQuestionInPort {
  execute(
    params: QuestionCreateInPortInputDto,
  ): Promise<QuestionCreateInPortOutputDto>;
}
