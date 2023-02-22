export type RespondentCreateInPortInputDto = {
  name: string;
  email: string;
};

export type RespondentCreateInPortOutputDto = {
  id: number;
  name: string;
  email: string;
};

// provider token
export const CREATE_RESPONDENT_INBOUND_PORT =
  'CREATE_RESPONDENT_INBOUND_PORT' as const;

export interface CreateRespondentInPort {
  execute(
    params: RespondentCreateInPortInputDto,
  ): Promise<RespondentCreateInPortOutputDto>;
}
