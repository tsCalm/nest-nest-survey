export type OptionFindAllOutPortInputDto = {
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type OptionFindAllOutPortOutputDto = Array<{
  id: number;
  question_id: number;
  option_number: number;
  text: string;
}>;

export const FINDALL_OPTION_OUTBOUND_PORT =
  'FINDALL_OPTION_OUTBOUND_PORT' as const;

export interface FindAllOptionOutPort {
  execute(
    params: OptionFindAllOutPortInputDto,
  ): Promise<OptionFindAllOutPortOutputDto>;
}
