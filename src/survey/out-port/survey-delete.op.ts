export type SurveyUpdateOutPortInputDto = number;

export type SurveyUpdateOutPortOutputDto = boolean;

export interface UpdateSurveyOutPort {
  execute(
    params: SurveyUpdateOutPortInputDto,
  ): Promise<SurveyUpdateOutPortOutputDto>;
}
