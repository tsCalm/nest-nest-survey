import { Test, TestingModule } from '@nestjs/testing';
import {
  UpdateSurveyOutPort,
  SurveyUpdateOutPortInputDto,
  SurveyUpdateOutPortOutputDto,
} from '../../out-port/survey-update.op';
import { SurveyService } from '../survey.service';

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
  const surveyObj: SurveyUpdateOutPortOutputDto = {
    id: 1,
    name: 'test-survey',
    description: 'test-desc',
  };

  const UpdateSurveyService = new MockUpdateOutPort(surveyObj);
  test('설문지 이름', async () => {
    const res = await UpdateSurveyService.execute({
      name: 'update-test-survey',
    });

    expect(res).toStrictEqual({
      id: 1,
      name: 'update-test-survey',
      description: 'test-desc',
    });
  });

  test('설문지 설명', async () => {
    const res = await UpdateSurveyService.execute({
      description: 'update-test-desc',
    });

    expect(res).toStrictEqual(surveyObj);
  });
});
