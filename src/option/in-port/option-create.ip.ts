export type OptionCreateInPortInputDto = {
  question_id: number;
  option_number: number;
  text: string;
};

export type OptionCreateInPortOutputDto = {
  id: number;
  question_id: number;
  option_number: number;
  text: string;
};

// provider token
export const CREATE_OPTION_INBOUND_PORT = 'CREATE_OPTION_INBOUND_PORT' as const;

export interface CreateOptionInPort {
  execute(
    params: OptionCreateInPortInputDto,
  ): Promise<OptionCreateInPortOutputDto>;
}
