export type OptionUpdateOutPortInputDto = {
  id: number;
  question_id: number;
  option_number?: number;
  text?: string;
};

export type OptionUpdateOutPortOutputDto = {
  id: number;
  question_id: number;
  option_number: number;
  text: string;
};

export const UPDATE_OPTION_OUTBOUND_PORT =
  'UPDATE_OPTION_OUTBOUND_PORT' as const;

export interface UpdateOptionOutPort {
  execute(
    params: OptionUpdateOutPortInputDto,
  ): Promise<OptionUpdateOutPortOutputDto>;
}
