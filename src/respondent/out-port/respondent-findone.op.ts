import { RespondentFindOneInPut, RespondentFindOneOutPut } from '../types';

export type RespondentFindOneOutPortInputDto = RespondentFindOneInPut;
export type RespondentFindOneOutPortOutputDto = RespondentFindOneOutPut;

export const FINDONE_RESPONDENT_OUTBOUND_PORT =
  'FINDONE_RESPONDENT_OUTBOUND_PORT' as const;

export interface FindOneRespondentOutPort {
  execute(
    params: RespondentFindOneOutPortInputDto,
  ): Promise<RespondentFindOneOutPortOutputDto>;
}
