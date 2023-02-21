export type QuestionUpdateInPortInputDto = {
  id: number;
  survey_id: number;
  question_number?: number;
  text?: string;
  type?: string;
};

export type QuestionUpdateInPortOutputDto = {
  id: number;
  survey_id: number;
  question_number: number;
  text: string;
  type: string;
};

// provider token
export const UPDATE_QUESTION_INBOUND_PORT =
  'UPDATE_QUESTION_INBOUND_PORT' as const;

export interface UpdateQuestionInPort {
  execute(
    params: QuestionUpdateInPortInputDto,
  ): Promise<QuestionUpdateInPortOutputDto>;
}
