export type ResponseCreateInPortInputDto = {
  answer: string;
  question_id: number;
  respondent_id: number;
};

export type ResponseCreateInPortOutputDto = {
  id: number;
  answer: string;
  question_id: number;
  respondent_id: number;
};

// provider token
export const CREATE_RESPONSE_INBOUND_PORT =
  'CREATE_RESPONSE_INBOUND_PORT' as const;

export interface CreateResponseInPort {
  execute(
    params: ResponseCreateInPortInputDto,
  ): Promise<ResponseCreateInPortOutputDto>;
}
