export type OptionCreateOutPortInputDto = {
  question_id: number;
  option_number: number;
  text: string;
};

export type OptionCreateOutPortOutputDto = {
  id: number;
  question_id: number;
  option_number: number;
  text: string;
};

export const CREATE_OPTION_OUTBOUND_PORT =
  'CREATE_OPTION_OUTBOUND_PORT' as const;

export interface CreateOptionOutPort {
  execute(
    params: OptionCreateOutPortInputDto,
  ): Promise<OptionCreateOutPortOutputDto>;
}
