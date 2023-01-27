import { Test, TestingModule } from '@nestjs/testing';
import {
  FindAllSurveyOutPort,
  SurveyFindAllOutPortInputDto,
  SurveyFindAllOutPortOutputDto,
} from 'src/survey/out-port/survey-findall.op';
import { SurveyService } from './survey.service';

/**
 * 1. 테스트하기 위한 interface부터 생각하기
 * 2. controller에서 전달하는 parameter가 잘 전달되는지부터 테스트
 */

class MockFindAllOutPort implements FindAllSurveyOutPort {
  private readonly params: SurveyFindAllOutPortInputDto;
  private readonly result: SurveyFindAllOutPortOutputDto;

  constructor(
    params: SurveyFindAllOutPortInputDto,
    result: SurveyFindAllOutPortOutputDto,
  ) {
    this.params = params;
    this.result = result;
  }

  async execute(
    params: SurveyFindAllOutPortInputDto,
  ): Promise<SurveyFindAllOutPortOutputDto> {
    return this.result;
  }
}
describe('설문지 리스트를 반환한다.', () => {
  const surveyList: SurveyFindAllOutPortOutputDto = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];
  const params: SurveyFindAllOutPortInputDto = {
    page: 1,
    size: 10,
    sort: 'ASC',
  };
  const findAllSurveyService = new MockFindAllOutPort(params, surveyList);
  test('서비스 -> 레파지토리 데이터 검증.', async () => {
    const res = await findAllSurveyService.execute(params);

    expect(res).toStrictEqual(surveyList);
  });
});
