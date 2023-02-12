export type SurveyFindOneOutPortInputDto = number;

export type SurveyFindOneOutPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

export interface FindOneSurveyOutPort {
  execute(
    params: SurveyFindOneOutPortInputDto,
  ): Promise<SurveyFindOneOutPortOutputDto>;
}
