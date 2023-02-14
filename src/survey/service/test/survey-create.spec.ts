import {
  SurveyCreateOutPortInputDto,
  SurveyCreateOutPortOutputDto,
} from '../../out-port/survey-create.op';
import { SurveyCreateService } from '../survey-create.service';

// class MockCreateOutPort implements CreateSurveyOutPort {
//   private readonly result: SurveyCreateOutPortOutputDto;

//   constructor(
//     params: SurveyCreateOutPortInputDto,
//     result: SurveyCreateOutPortOutputDto,
//   ) {
//     this.result = result;
//   }

//   async execute(
//     params: SurveyCreateOutPortInputDto,
//   ): Promise<SurveyCreateOutPortOutputDto> {
//     return this.result;
//   }
// }

describe('설문지를 생성한다.', () => {
  const survey: SurveyCreateOutPortOutputDto = {
    id: 1,
    name: 'test-survey',
    description: 'test-desc',
  };
  const params: SurveyCreateOutPortInputDto = {
    name: 'test-survey',
    description: 'test-desc',
  };
  const CreateSurveyService = new SurveyCreateService();
  // new MockCreateOutPort(params, survey);
  test('설문지 생성.', async () => {
    const createResult = await CreateSurveyService.execute(params);

    expect(createResult).toStrictEqual(survey);
  });
});
