export type SurveyDeleteOutPortInputDto = number;

export type SurveyDeleteOutPortOutputDto = number;

export interface DeleteSurveyOutPort {
  execute(
    params: SurveyDeleteOutPortInputDto,
  ): Promise<SurveyDeleteOutPortOutputDto>;
}
