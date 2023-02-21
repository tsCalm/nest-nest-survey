export type QuestionDeleteOutPortInputDto = number;

export type QuestionDeleteOutPortOutputDto = number;

export const DELETE_QUESTION_OUTBOUND_PORT =
  'DELETE_QUESTION_OUTBOUND_PORT' as const;

export interface DeleteQuestionOutPort {
  execute(
    params: QuestionDeleteOutPortInputDto,
  ): Promise<QuestionDeleteOutPortOutputDto>;
}
