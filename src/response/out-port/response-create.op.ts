export type ResponseCreateOutPortInputDto = {
  answer: string;
  question_id: number;
  respondent_id: number;
};

export type ResponseCreateOutPortOutputDto = {
  id: number;
  answer: string;
  question_id: number;
  respondent_id: number;
};

export const CREATE_RESPONSE_OUTBOUND_PORT =
  'CREATE_RESPONSE_OUTBOUND_PORT' as const;

export interface CreateResponseOutPort {
  execute(
    params: ResponseCreateOutPortInputDto,
  ): Promise<ResponseCreateOutPortOutputDto>;
}
