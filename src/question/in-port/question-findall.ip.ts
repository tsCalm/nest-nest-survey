export type QuestionFindAllInPortInputDto = {
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type QuestionFindAllInPortOutputDto = Array<{
  id: number;
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
}>;

// provider token
export const FINDALL_QUESTION_INBOUND_PORT =
  'FINDALL_QUESTION_INBOUND_PORT' as const;

export interface FindAllQuestionInPort {
  execute(
    params: QuestionFindAllInPortInputDto,
  ): Promise<QuestionFindAllInPortOutputDto>;
}
