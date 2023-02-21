export type QuestionDeleteInPortInputDto = number;

export type QuestionDeleteInPortOutputDto = number;

// provider token
export const DELETE_QUESTION_INBOUND_PORT =
  'DELETE_QUESTION_INBOUND_PORT' as const;

export interface DeleteQuestionInPort {
  execute(
    params: QuestionDeleteInPortInputDto,
  ): Promise<QuestionDeleteInPortOutputDto>;
}
