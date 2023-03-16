import {
  QuestionCreateInPortInputDto,
  QuestionCreateInPortOutputDto,
} from '../../in-port/question-create.ip';
import {
  CreateQuestionOutPort,
  QuestionCreateOutPortInputDto,
  QuestionCreateOutPortOutputDto,
} from '../../out-port/question-create.op';
import { QuestionCreateService } from '../question-create.service';

class MockCreateOutPort implements CreateQuestionOutPort {
  private readonly result: QuestionCreateOutPortOutputDto;

  constructor(params: QuestionCreateOutPortInputDto) {
    this.result = {
      id: 1,
      ...params,
    };
  }

  async execute(
    params: QuestionCreateOutPortInputDto,
  ): Promise<QuestionCreateOutPortOutputDto> {
    return this.result;
  }
}

describe('질문을 생성한다.', () => {
  const question: QuestionCreateInPortOutputDto = {
    id: 1,
    survey_id: 1,
    question_number: 1,
    text: '당신이 가장 선호하는 개발언어는?',
    type: 'number',
  };
  const params: QuestionCreateInPortInputDto = {
    survey_id: 1,
    question_number: 1,
    text: '당신이 가장 선호하는 개발언어는?',
    type: 'number',
  };
  const CreateQuestionService = new QuestionCreateService(
    new MockCreateOutPort(params),
  );

  test('질문 생성.', async () => {
    const createResult = await CreateQuestionService.execute(params);

    expect(createResult).toStrictEqual(question);
  });
});
