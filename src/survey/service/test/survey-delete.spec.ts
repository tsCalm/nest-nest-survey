import {
  DeleteSurveyOutPort,
  SurveyDeleteOutPortInputDto,
  SurveyDeleteOutPortOutputDto,
} from '../../out-port/survey-delete.op';
import { SurveyDeleteService } from '../survey-delete.service';

type SurveyDeleteList = Array<{
  id: number;
  name: string;
  description: string;
}>;

// class MockDeleteOutPort implements DeleteSurveyOutPort {
//   private readonly result: SurveyDeleteList;

//   constructor(result: SurveyDeleteList) {
//     this.result = result;
//   }

//   async execute(
//     params: SurveyDeleteOutPortInputDto,
//   ): Promise<SurveyDeleteOutPortOutputDto> {
//     const findedSurvey = this.result.find((survey) => survey.id === params);
//     if (!findedSurvey) return 0;
//     return 1;
//   }
// }

describe('설문지를 생성한다.', () => {
  const surveyList: SurveyDeleteList = [
    {
      id: 1,
      name: 'survey-one',
      description: 'survey-one-desc',
    },
    {
      id: 2,
      name: 'survey-two',
      description: 'survey-two-desc',
    },
    {
      id: 3,
      name: 'survey-three',
      description: 'survey-three-desc',
    },
  ];
  const existIdDeleteParam: SurveyDeleteOutPortInputDto = 1;
  const notExistIdDeleteParam: SurveyDeleteOutPortInputDto = 4;
  const DeleteSurveyService = new SurveyDeleteService();
  // new MockDeleteOutPort(surveyList);
  test('존재하는 설문지 삭제', async () => {
    const res = await DeleteSurveyService.execute(existIdDeleteParam);

    expect(res).toBe(1);
  });

  test('존재하지 않는 설문지 삭제', async () => {
    const res = await DeleteSurveyService.execute(notExistIdDeleteParam);

    expect(res).toBe(0);
  });
});
