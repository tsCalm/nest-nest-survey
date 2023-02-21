export type OptionUpdateInPortInputDto = {
  id: number;
  question_id: number;
  option_number?: number;
  text?: string;
};

export type OptionUpdateInPortOutputDto = {
  id: number;
  question_id: number;
  option_number: number;
  text: string;
};

// provider token
export const UPDATE_OPTION_INBOUND_PORT = 'UPDATE_OPTION_INBOUND_PORT' as const;

export interface UpdateOptionInPort {
  execute(
    params: OptionUpdateInPortInputDto,
  ): Promise<OptionUpdateInPortOutputDto>;
}
