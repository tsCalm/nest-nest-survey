import { RespondentFindOneInPut, RespondentFindOneOutPut } from '../types';

export type RespondentFindOneInPortInputDto = RespondentFindOneInPut;
export type RespondentFindOneInPortOutputDto = RespondentFindOneOutPut;

// provider token
export const FINDONE_RESPONDENT_INBOUND_PORT =
  'FINDONE_RESPONDENT_INBOUND_PORT' as const;

export interface FindOneRespondentInPort {
  execute(
    params: RespondentFindOneInPortInputDto,
  ): Promise<RespondentFindOneInPortOutputDto>;
}
