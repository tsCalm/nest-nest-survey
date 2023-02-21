export type OptionSearchOutPortInputDto = {
  keyword: string;
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type OptionSearchOutPortOutputDto = Array<{
  id: number;
  question_id: number;
  option_number: number;
  text: string;
}>;

export const SEARCH_OPTION_OUTBOUND_PORT =
  'SEARCH_OPTION_OUTBOUND_PORT' as const;

export interface SearchOptionOutPort {
  execute(
    params: OptionSearchOutPortInputDto,
  ): Promise<OptionSearchOutPortOutputDto>;
}
