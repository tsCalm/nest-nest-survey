export type SurveyFindOneOutPortInputDto = number;

export type SurveyFindOneOutPortOutputDto = {
  id: number;
};

export interface FindOneSurveyOutPort {
  execute(
    params: SurveyFindOneOutPortInputDto,
  ): Promise<SurveyFindOneOutPortOutputDto>;
}
