export type RespondentFindAllInPortInputDto = {
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type RespondentFindAllInPortOutputDto = Array<{
  id: number;
  name: string;
  email: string;
}>;

// provider token
export const FINDALL_RESPONDENT_INBOUND_PORT =
  'FINDALL_RESPONDENT_INBOUND_PORT' as const;

export interface FindAllRespondentInPort {
  execute(
    params: RespondentFindAllInPortInputDto,
  ): Promise<RespondentFindAllInPortOutputDto>;
}
