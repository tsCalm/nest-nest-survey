import {
  CreateSurveyOutPort,
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
  const surveyObj: SurveyCreateOutPortOutputDto = {
    id: 1,
    name: 'test-survey',
    description: 'test-desc',
  };
  const params: SurveyCreateOutPortInputDto = {
    name: 'test-survey',
    description: 'test-desc',
  };
  const CreateSurveyService = new SurveyCreateService();
  // new MockCreateOutPort(params, surveyObj);
  test('설문지 생성.', async () => {
    const res = await CreateSurveyService.execute(params);

    expect(res).toStrictEqual(surveyObj);
  });
});
