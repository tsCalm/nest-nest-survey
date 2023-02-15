import {
  SurveyFindOneInPortInputDto,
  SurveyFindOneInPortOutputDto,
} from '../../in-port/survey-findone.ip';
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
  const survey: SurveyFindOneInPortOutputDto = {
    id: 1,
    name: 'test-survey',
    description: 'test-desc',
  };
  const params: SurveyFindOneInPortInputDto = 1;
  const findAllSurveyService = new SurveyFindOneService();
  // new MockFindAllOutPort(params, survey);
  test('설문지 상세', async () => {
    const findoneResult = await findAllSurveyService.execute(params);

    expect(findoneResult).toStrictEqual(survey);
  });
});
