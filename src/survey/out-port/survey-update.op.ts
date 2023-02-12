export type SurveyUpdateOutPortInputDto = {
  name?: string;
  description?: string;
};

export type SurveyUpdateOutPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

export interface UpdateSurveyOutPort {
  execute(
    params: SurveyUpdateOutPortInputDto,
  ): Promise<SurveyUpdateOutPortOutputDto>;
}
