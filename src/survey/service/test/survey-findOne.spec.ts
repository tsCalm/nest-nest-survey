import { Test, TestingModule } from '@nestjs/testing';
import {
  FindOneSurveyOutPort,
  SurveyFindOneOutPortInputDto,
  SurveyFindOneOutPortOutputDto,
} from '../../out-port/survey-findone.op';
import { SurveyService } from '../survey.service';

class MockFindAllOutPort implements FindOneSurveyOutPort {
  private readonly result: SurveyFindOneOutPortOutputDto;

  constructor(
    params: SurveyFindOneOutPortInputDto,
    result: SurveyFindOneOutPortOutputDto,
  ) {
    this.result = result;
  }

  async execute(
    params: SurveyFindOneOutPortInputDto,
  ): Promise<SurveyFindOneOutPortOutputDto> {
    return this.result;
  }
}

describe('설문지 상세정보를 반환한다.', () => {
  const surveyObj: SurveyFindOneOutPortOutputDto = {
    id: 1,
    name: 'test-survey',
    description: 'test-desc',
  };
  const params: SurveyFindOneOutPortInputDto = 1;
  const findAllSurveyService = new MockFindAllOutPort(params, surveyObj);
  test('설문지 상세', async () => {
    const res = await findAllSurveyService.execute(params);

    expect(res).toStrictEqual(surveyObj);
  });
});
