export type OptionSearchInPortInputDto = {
  keyword: string;
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type OptionSearchInPortOutputDto = Array<{
  id: number;
  question_id: number;
  option_number: number;
  text: string;
}>;

// provider token
export const SEARCH_OPTION_INBOUND_PORT = 'SEARCH_OPTION_INBOUND_PORT' as const;

export interface SearchOptionInPort {
  execute(
    params: OptionSearchInPortInputDto,
  ): Promise<OptionSearchInPortOutputDto>;
}
