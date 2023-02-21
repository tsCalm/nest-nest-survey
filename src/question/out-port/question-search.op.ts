export type QuestionSearchOutPortInputDto = {
  keyword: string;
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type QuestionSearchOutPortOutputDto = Array<{
  id: number;
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
}>;

export const SEARCH_QUESTION_OUTBOUND_PORT =
  'SEARCH_QUESTION_OUTBOUND_PORT' as const;

export interface SearchQuestionOutPort {
  execute(
    params: QuestionSearchOutPortInputDto,
  ): Promise<QuestionSearchOutPortOutputDto>;
}
