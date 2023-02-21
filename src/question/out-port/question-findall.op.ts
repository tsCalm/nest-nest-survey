export type QuestionFindAllOutPortInputDto = {
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type QuestionFindAllOutPortOutputDto = Array<{
  id: number;
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
}>;

export const FINDALL_QUESTION_OUTBOUND_PORT =
  'FINDALL_QUESTION_OUTBOUND_PORT' as const;

export interface FindAllQuestionOutPort {
  execute(
    params: QuestionFindAllOutPortInputDto,
  ): Promise<QuestionFindAllOutPortOutputDto>;
}
