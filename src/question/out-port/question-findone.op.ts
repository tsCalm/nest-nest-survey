export type QuestionFindOneOutPortInputDto = number;

export type QuestionFindOneOutPortOutputDto = {
  id: number;
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
};

export const FINDONE_QUESTION_OUTBOUND_PORT =
  'FINDONE_QUESTION_OUTBOUND_PORT' as const;

export interface FindOneQuestionOutPort {
  execute(
    params: QuestionFindOneOutPortInputDto,
  ): Promise<QuestionFindOneOutPortOutputDto>;
}
