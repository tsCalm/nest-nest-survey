export type RespondentFindOneOutPortInputDto = number;

export type RespondentFindOneOutPortOutputDto = {
  id: number;
  name: string;
  email: string;
};

export const FINDONE_RESPONDENT_OUTBOUND_PORT =
  'FINDONE_RESPONDENT_OUTBOUND_PORT' as const;

export interface FindOneRespondentOutPort {
  execute(
    params: RespondentFindOneOutPortInputDto,
  ): Promise<RespondentFindOneOutPortOutputDto>;
}
