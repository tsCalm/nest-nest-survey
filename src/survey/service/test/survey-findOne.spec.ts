import { Test, TestingModule } from '@nestjs/testing';
import {
  FindOneSurveyOutPort,
  SurveyFindOneOutPortInputDto,
  SurveyFindOneOutPortOutputDto,
} from '../../out-port/survey-findone.op';
import { SurveyService } from '../survey.service';

/**
 * 1. 테스트하기 위한 interface부터 생각하기
 * 2. controller에서 전달하는 parameter가 잘 전달되는지부터 테스트
 */

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
  const result: SurveyFindOneOutPortOutputDto = {
    id: 0,
    name: '',
    description: '',
  };
  const findAllSurveyService = new MockFindAllOutPort(params, surveyObj);
  test('서비스 -> 레파지토리 데이터 검증.', async () => {
    const res = await findAllSurveyService.execute(params);

    expect(res).toStrictEqual(surveyObj);
  });
});
