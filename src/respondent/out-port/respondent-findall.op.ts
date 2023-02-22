export type RespondentFindAllOutPortInputDto = {
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type RespondentFindAllOutPortOutputDto = Array<{
  id: number;
  name: string;
  email: string;
}>;

export const FINDALL_RESPONDENT_OUTBOUND_PORT =
  'FINDALL_RESPONDENT_OUTBOUND_PORT' as const;

export interface FindAllRespondentOutPort {
  execute(
    params: RespondentFindAllOutPortInputDto,
  ): Promise<RespondentFindAllOutPortOutputDto>;
}
