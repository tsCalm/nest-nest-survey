export type SurveyCreateOutPortInputDto = {
  name: string;
  description: string;
};

export type SurveyCreateOutPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

export interface CreateSurveyOutPort {
  execute(
    params: SurveyCreateOutPortInputDto,
  ): Promise<SurveyCreateOutPortOutputDto>;
}
