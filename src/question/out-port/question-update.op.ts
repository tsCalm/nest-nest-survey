export type QuestionUpdateOutPortInputDto = {
  id: number;
  survey_id: number;
  question_number?: number;
  text?: string;
  type?: string;
};

export type QuestionUpdateOutPortOutputDto = {
  id: number;
  survey_id: number;
  question_number: number;
  text: string;
  type: string;
};

export const UPDATE_QUESTION_OUTBOUND_PORT =
  'UPDATE_QUESTION_OUTBOUND_PORT' as const;

export interface UpdateQuestionOutPort {
  execute(
    params: QuestionUpdateOutPortInputDto,
  ): Promise<QuestionUpdateOutPortOutputDto>;
}
