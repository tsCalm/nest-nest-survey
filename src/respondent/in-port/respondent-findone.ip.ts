export type RespondentFindOneInPortInputDto = number;

export type RespondentFindOneInPortOutputDto = {
  id: number;
  name: string;
  email: string;
};

// provider token
export const FINDONE_RESPONDENT_INBOUND_PORT =
  'FINDONE_RESPONDENT_INBOUND_PORT' as const;

export interface FindOneRespondentInPort {
  execute(
    params: RespondentFindOneInPortInputDto,
  ): Promise<RespondentFindOneInPortOutputDto>;
}
