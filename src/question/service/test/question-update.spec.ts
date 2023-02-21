import { QuestionUpdateInPortOutputDto } from 'src/question/in-port/question-update.ip';
import {
  QuestionUpdateOutPortInputDto,
  QuestionUpdateOutPortOutputDto,
  UpdateQuestionOutPort,
} from 'src/question/out-port/question-update.op';
import { QuestionUpdateService } from '../question-update.service';

class MockUpdateOutPort implements UpdateQuestionOutPort {
  private readonly result: QuestionUpdateOutPortOutputDto;

  constructor(result: QuestionUpdateOutPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: QuestionUpdateOutPortInputDto,
  ): Promise<QuestionUpdateOutPortOutputDto> {
    return { ...this.result, ...params };
  }
}

describe('질문 업데이트', () => {
  const question: QuestionUpdateInPortOutputDto = {
    id: 1,
    survey_id: 1,
    question_number: 1,
    text: '당신이 가장 선호하는 개발 언어는?',
    type: 'number',
  };

  const UpdateQuestionService = new QuestionUpdateService(
    new MockUpdateOutPort(question),
  );
  test('질문 이름', async () => {
    const nameUpdateResult = await UpdateQuestionService.execute({
      id: 1,
      survey_id: 1,
      text: '당신이 가장 선호하지 않는 개발 언어는?',
    });

    expect(nameUpdateResult).toStrictEqual({
      id: 1,
      survey_id: 1,
      question_number: 1,
      text: '당신이 가장 선호하지 않는 개발 언어는?',
      type: 'number',
    });
  });
});
