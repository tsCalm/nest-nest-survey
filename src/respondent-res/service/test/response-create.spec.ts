import {
  ResponseCreateInPortInputDto,
  ResponseCreateInPortOutputDto,
} from '../../../respondent-res/in-port/response-create.ip';
import {
  CreateResponseOutPort,
  ResponseCreateOutPortInputDto,
  ResponseCreateOutPortOutputDto,
} from '../../../respondent-res/out-port/response-create.op';
import { ResponseCreateService } from '../response-create.service';

class MockCreateOutPort implements CreateResponseOutPort {
  private readonly result: ResponseCreateOutPortOutputDto;

  constructor(params: ResponseCreateOutPortInputDto) {
    this.result = {
      id: 1,
      ...params,
    };
  }

  async execute(
    params: ResponseCreateOutPortInputDto,
  ): Promise<ResponseCreateOutPortOutputDto> {
    return this.result;
  }
}

describe('유저 설문 답변', () => {
  const user_response: ResponseCreateInPortOutputDto = {
    id: 1,
    answer: 'test',
    question_id: 1,
    respondent_id: 1,
  };
  const params: ResponseCreateInPortInputDto = {
    answer: 'test',
    question_id: 1,
    respondent_id: 1,
  };
  const CreateResponseService = new ResponseCreateService(
    new MockCreateOutPort(params),
  );

  test('설문 답변', async () => {
    const createResult = await CreateResponseService.execute(params);

    expect(createResult).toStrictEqual(user_response);
  });
});
