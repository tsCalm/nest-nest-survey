import { Test, TestingModule } from '@nestjs/testing';
import {
  FindAllSurveyOutPort,
  SurveyFindAllOutPortInputDto,
  SurveyFindAllOutPortOutputDto,
} from '../../out-port/survey-findall.op';
import { SurveyService } from '../survey.service';

/**
 * 1. 테스트하기 위한 interface부터 생각하기
 * 2. controller에서 전달하는 parameter가 잘 전달되는지부터 테스트
 */

class MockFindAllOutPort implements FindAllSurveyOutPort {
  private readonly result: SurveyFindAllOutPortOutputDto;

  constructor(
    params: SurveyFindAllOutPortInputDto,
    result: SurveyFindAllOutPortOutputDto,
  ) {
    this.result = result;
  }

  async execute(
    params: SurveyFindAllOutPortInputDto,
  ): Promise<SurveyFindAllOutPortOutputDto> {
    return this.result;
  }
}
describe('설문지 리스트를 반환한다.', () => {
  const surveyFindAllResult: SurveyFindAllOutPortOutputDto = [
    {
      id: 1,
      name: '당신이 선호하는 백엔드 언어는?',
      description:
        '백엔드 개발자가 선호하는 언어를 조사하기 위한 설문지입니다.',
    },
    {
      id: 2,
      name: '당신이 선호하는 프론트엔드 언어는?',
      description:
        '프론트엔드 개발자가 선호하는 언어를 조사하기 위한 설문지입니다.',
    },
    {
      id: 3,
      name: '당신이 nodejs 개발자를 선택한 이유는?',
      description:
        '개발자가 자신이 주력으로 사용한 언어를 선택한 이유를 묻는 설문지입니다.',
    },
  ];

  const params: SurveyFindAllOutPortInputDto = {
    page: 1,
    size: 3,
    sort: 'ASC',
  };
  const findAllSurveyService = new MockFindAllOutPort(
    params,
    surveyFindAllResult,
  );
  test('서비스 -> 레파지토리 데이터 검증.', async () => {
    const surveyList = await findAllSurveyService.execute(params);

    expect(surveyList).toStrictEqual(surveyFindAllResult);
  });
});
