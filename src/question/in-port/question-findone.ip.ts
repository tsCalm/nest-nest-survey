export type QuestionFindOneInPortInputDto = number;

export type QuestionFindOneInPortOutputDto = {
  id: number;
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
};

// provider token
export const FINDONE_QUESTION_INBOUND_PORT =
  'FINDONE_QUESTION_INBOUND_PORT' as const;

export interface FindOneQuestionInPort {
  execute(
    params: QuestionFindOneInPortInputDto,
  ): Promise<QuestionFindOneInPortOutputDto>;
}
