import {
  SurveyFindOneOutPortInputDto,
  SurveyFindOneOutPortOutputDto,
} from '../../out-port/survey-findone.op';
import { SurveyFindOneService } from '../survey-findone.service';

// class MockFindAllOutPort implements FindOneSurveyOutPort {
//   private readonly result: SurveyFindOneOutPortOutputDto;

//   constructor(
//     params: SurveyFindOneOutPortInputDto,
//     result: SurveyFindOneOutPortOutputDto,
//   ) {
//     this.result = result;
//   }

//   async execute(
//     params: SurveyFindOneOutPortInputDto,
//   ): Promise<SurveyFindOneOutPortOutputDto> {
//     return this.result;
//   }
// }

describe('설문지 상세정보를 반환한다.', () => {
  const survey: SurveyFindOneOutPortOutputDto = {
    id: 1,
    name: 'test-survey',
    description: 'test-desc',
  };
  const params: SurveyFindOneOutPortInputDto = 1;
  const findAllSurveyService = new SurveyFindOneService();
  // new MockFindAllOutPort(params, survey);
  test('설문지 상세', async () => {
    const findoneResult = await findAllSurveyService.execute(params);

    expect(findoneResult).toStrictEqual(survey);
  });
});
