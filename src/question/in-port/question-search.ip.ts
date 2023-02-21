export type QuestionSearchInPortInputDto = {
  keyword: string;
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type QuestionSearchInPortOutputDto = Array<{
  id: number;
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
}>;

// provider token
export const SEARCH_QUESTION_INBOUND_PORT =
  'SEARCH_QUESTION_INBOUND_PORT' as const;

export interface SearchQuestionInPort {
  execute(
    params: QuestionSearchInPortInputDto,
  ): Promise<QuestionSearchInPortOutputDto>;
}
