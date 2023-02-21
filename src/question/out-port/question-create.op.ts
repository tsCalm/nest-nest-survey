export type QuestionCreateOutPortInputDto = {
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
};

export type QuestionCreateOutPortOutputDto = {
  id: number;
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
};

export const CREATE_QUESTION_OUTBOUND_PORT =
  'CREATE_QUESTION_OUTBOUND_PORT' as const;

export interface CreateQuestionOutPort {
  execute(
    params: QuestionCreateOutPortInputDto,
  ): Promise<QuestionCreateOutPortOutputDto>;
}
