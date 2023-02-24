import { SORT_OPTION } from 'src/common/enum';

export type SurveyFindAllInPortInputDto = {
  page: number;
  size: number;
  sort: SORT_OPTION;
};

export type SurveyFindAllInPortOutputDto = Array<{
  id: number;
  name: string;
  description: string;
}>;

// provider token
export const FINDALL_SURVEY_INBOUND_PORT =
  'FINDALL_SURVEY_INBOUND_PORT' as const;

export interface FindAllSurveyInPort {
  execute(
    params: SurveyFindAllInPortInputDto,
  ): Promise<SurveyFindAllInPortOutputDto>;
}
