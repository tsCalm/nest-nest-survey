export type OptionFindOneInPortInputDto = number;

export type OptionFindOneInPortOutputDto = {
  id: number;
  question_id: number;
  option_number: number;
  text: string;
};

// provider token
export const FINDONE_OPTION_INBOUND_PORT =
  'FINDONE_OPTION_INBOUND_PORT' as const;

export interface FindOneOptionInPort {
  execute(
    params: OptionFindOneInPortInputDto,
  ): Promise<OptionFindOneInPortOutputDto>;
}
