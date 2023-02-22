export type RespondentCreateOutPortInputDto = {
  name: string;
  email: string;
};

export type RespondentCreateOutPortOutputDto = {
  id: number;
  name: string;
  email: string;
};

export const CREATE_RESPONDENT_OUTBOUND_PORT =
  'CREATE_RESPONDENT_OUTBOUND_PORT' as const;

export interface CreateRespondentOutPort {
  execute(
    params: RespondentCreateOutPortInputDto,
  ): Promise<RespondentCreateOutPortOutputDto>;
}
