import {
  QuestionFindOneInPortInputDto,
  QuestionFindOneInPortOutputDto,
} from 'src/question/in-port/question-findone.ip';
import {
  FindOneQuestionOutPort,
  QuestionFindOneOutPortInputDto,
  QuestionFindOneOutPortOutputDto,
} from 'src/question/out-port/question-findone.op';
import { QuestionFindOneService } from '../question-findone.service';

class MockFindAllOutPort implements FindOneQuestionOutPort {
  private readonly result: QuestionFindOneOutPortOutputDto;

  constructor(result: QuestionFindOneOutPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: QuestionFindOneOutPortInputDto,
  ): Promise<QuestionFindOneOutPortOutputDto> {
    return this.result;
  }
}

describe('설문지 상세정보를 반환한다.', () => {
  const survey: QuestionFindOneInPortOutputDto = {
    id: 1,
    survey_id: 1,
    question_number: 1,
    text: '당신이 가장 선호하는 개발 언어는?',
    type: 'number',
  };
  const params: QuestionFindOneInPortInputDto = 1;
  const findAllQuestionService = new QuestionFindOneService(
    new MockFindAllOutPort(survey),
  );
  test('설문지 상세', async () => {
    const findoneResult = await findAllQuestionService.execute(params);

    expect(findoneResult).toStrictEqual(survey);
  });
});
