export type OptionFindAllInPortInputDto = {
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type OptionFindAllInPortOutputDto = Array<{
  id: number;
  question_id: number;
  option_number: number;
  text: string;
}>;

// provider token
export const FINDALL_OPTION_INBOUND_PORT =
  'FINDALL_OPTION_INBOUND_PORT' as const;

export interface FindAllOptionInPort {
  execute(
    params: OptionFindAllInPortInputDto,
  ): Promise<OptionFindAllInPortOutputDto>;
}
