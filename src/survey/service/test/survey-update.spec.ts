import { SurveyUpdateInPortOutputDto } from 'src/survey/in-port/survey-update.ip';
import {
  SurveyUpdateOutPortInputDto,
  SurveyUpdateOutPortOutputDto,
  UpdateSurveyOutPort,
} from 'src/survey/out-port/survey-update.op';
import { SurveyUpdateService } from '../survey-update.service';

class MockUpdateOutPort implements UpdateSurveyOutPort {
  private readonly result: SurveyUpdateOutPortOutputDto;

  constructor(result: SurveyUpdateOutPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: SurveyUpdateOutPortInputDto,
  ): Promise<SurveyUpdateOutPortOutputDto> {
    return { ...this.result, ...params };
  }
}

describe('설문지 업데이트', () => {
  const survey: SurveyUpdateInPortOutputDto = {
    id: 1,
    name: 'test-survey',
    description: 'test-desc',
  };

  const UpdateSurveyService = new SurveyUpdateService(
    new MockUpdateOutPort(survey),
  );
  test('설문지 이름', async () => {
    const nameUpdateResult = await UpdateSurveyService.execute({
      id: 1,
      name: 'update-test-survey',
    });

    expect(nameUpdateResult).toStrictEqual({
      id: 1,
      name: 'update-test-survey',
      description: 'test-desc',
    });
  });

  test('설문지 설명', async () => {
    const descUpdateResult = await UpdateSurveyService.execute({
      id: 1,
      description: 'update-test-desc',
    });

    expect(descUpdateResult).toStrictEqual({
      id: 1,
      name: 'test-survey',
      description: 'update-test-desc',
    });
  });
});
