import {
  CreateSurveyOutPort,
  SurveyCreateOutPortInputDto,
  SurveyCreateOutPortOutputDto,
} from 'src/survey/out-port/survey-create.op';
import {
  SurveyCreateInPortInputDto,
  SurveyCreateInPortOutputDto,
} from '../../in-port/survey-create.ip';
import { SurveyCreateService } from '../survey-create.service';

class MockCreateOutPort implements CreateSurveyOutPort {
  private readonly result: SurveyCreateOutPortOutputDto;

  constructor(params: SurveyCreateOutPortInputDto) {
    this.result = {
      id: 1,
      ...params,
    };
  }

  async execute(
    params: SurveyCreateOutPortInputDto,
  ): Promise<SurveyCreateOutPortOutputDto> {
    return this.result;
  }
}

describe('설문지를 생성한다.', () => {
  const survey: SurveyCreateInPortOutputDto = {
    id: 1,
    name: 'test-survey',
    description: 'test-desc',
  };
  const params: SurveyCreateInPortInputDto = {
    name: 'test-survey',
    description: 'test-desc',
  };
  const CreateSurveyService = new SurveyCreateService(
    new MockCreateOutPort(params),
  );
  // new MockCreateOutPort(params, survey);
  test('설문지 생성.', async () => {
    const createResult = await CreateSurveyService.execute(params);

    expect(createResult).toStrictEqual(survey);
  });
});
