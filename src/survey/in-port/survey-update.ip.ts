export type SurveyUpdateInPortInputDto = {
  name?: string;
  description?: string;
};

export type SurveyUpdateInPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

// provider token
export const UPDATE_SURVEY_INBOUND_PORT = 'UPDATE_SURVEY_INBOUND_PORT' as const;

export interface UpdateSurveyInPort {
  execute(
    params: SurveyUpdateInPortInputDto,
  ): Promise<SurveyUpdateInPortOutputDto>;
}
