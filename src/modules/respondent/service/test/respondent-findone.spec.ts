import {
  RespondentFindOneInPortInputDto,
  RespondentFindOneInPortOutputDto,
} from '../../in-port/respondent-findone.ip';
import {
  FindOneRespondentOutPort,
  RespondentFindOneOutPortInputDto,
  RespondentFindOneOutPortOutputDto,
} from '../../out-port/respondent-findone.op';
import { RespondentFindOneService } from '../respondent-findone.service';

class MockFindAllOutPort implements FindOneRespondentOutPort {
  private readonly result: RespondentFindOneOutPortOutputDto;

  constructor(result: RespondentFindOneOutPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: RespondentFindOneOutPortInputDto,
  ): Promise<RespondentFindOneOutPortOutputDto> {
    return this.result;
  }
}

describe('설문 참여 유저', () => {
  const question: RespondentFindOneInPortOutputDto = {
    id: 1,
    name: '홍길동',
    email: 'gd1600@gmail.com',
    responses: [],
  };
  const params: RespondentFindOneInPortInputDto = 1;
  const findAllRespondentService = new RespondentFindOneService(
    new MockFindAllOutPort(question),
  );
  test('설문 참여 유저 찾기', async () => {
    const findoneResult = await findAllRespondentService.execute(params);

    expect(findoneResult).toStrictEqual(question);
  });
});
