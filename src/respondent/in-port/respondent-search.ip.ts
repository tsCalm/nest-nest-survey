export type RespondentSearchInPortInputDto = {
  keyword: string;
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type RespondentSearchInPortOutputDto = Array<{
  id: number;
  name: string;
  email: string;
}>;

// provider token
export const SEARCH_RESPONDENT_INBOUND_PORT =
  'SEARCH_RESPONDENT_INBOUND_PORT' as const;

export interface SearchRespondentInPort {
  execute(
    params: RespondentSearchInPortInputDto,
  ): Promise<RespondentSearchInPortOutputDto>;
}
