import {
  RespondentCreateInPortInputDto,
  RespondentCreateInPortOutputDto,
} from '../../../respondent/in-port/respondent-create.ip';
import {
  CreateRespondentOutPort,
  RespondentCreateOutPortInputDto,
  RespondentCreateOutPortOutputDto,
} from '../../../respondent/out-port/respondent-create.op';
import { RespondentCreateService } from '../respondent-create.service';

class MockCreateOutPort implements CreateRespondentOutPort {
  private readonly result: RespondentCreateOutPortOutputDto;

  constructor(params: RespondentCreateOutPortInputDto) {
    this.result = {
      id: 1,
      ...params,
    };
  }

  async execute(
    params: RespondentCreateOutPortInputDto,
  ): Promise<RespondentCreateOutPortOutputDto> {
    return this.result;
  }
}

describe('유저 설문 참여', () => {
  const respondent: RespondentCreateInPortOutputDto = {
    id: 1,
    name: '홍길동',
    email: 'gd1600@gmail.com',
  };
  const params: RespondentCreateInPortInputDto = {
    name: '홍길동',
    email: 'gd1600@gmail.com',
  };
  const CreateRespondentService = new RespondentCreateService(
    new MockCreateOutPort(params),
  );

  test('설문 참여', async () => {
    const createResult = await CreateRespondentService.execute(params);

    expect(createResult).toStrictEqual(respondent);
  });
});
