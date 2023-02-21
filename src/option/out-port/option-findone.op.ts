export type OptionFindOneOutPortInputDto = number;

export type OptionFindOneOutPortOutputDto = {
  id: number;
  question_id: number;
  option_number: number;
  text: string;
};

export const FINDONE_OPTION_OUTBOUND_PORT =
  'FINDONE_OPTION_OUTBOUND_PORT' as const;

export interface FindOneOptionOutPort {
  execute(
    params: OptionFindOneOutPortInputDto,
  ): Promise<OptionFindOneOutPortOutputDto>;
}
