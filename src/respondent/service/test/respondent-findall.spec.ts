import {
  RespondentFindAllInPortInputDto,
  RespondentFindAllInPortOutputDto,
} from 'src/respondent/in-port/respondent-findall.ip';
import {
  FindAllRespondentOutPort,
  RespondentFindAllOutPortInputDto,
  RespondentFindAllOutPortOutputDto,
} from 'src/respondent/out-port/respondent-findall.op';
import { RespondentFindAllService } from '../respondent-findall.service';

class MockFindAllOutPort implements FindAllRespondentOutPort {
  private readonly result: RespondentFindAllOutPortOutputDto;

  constructor(
    // params: RespondentFindAllOutPortInputDto,
    result: RespondentFindAllOutPortOutputDto,
  ) {
    this.result = result;
  }

  async execute(
    params: RespondentFindAllOutPortInputDto,
  ): Promise<RespondentFindAllOutPortOutputDto> {
    return this.result;
  }
}

describe('설문참여 유저 리스트', () => {
  const respondentList: RespondentFindAllInPortOutputDto = [
    {
      id: 1,
      name: '홍길동',
      email: 'gd1600@gmail.com',
    },
    {
      id: 2,
      name: '김연아',
      email: 'w_number_one@gmail.com',
    },
    {
      id: 3,
      name: '손흥민',
      email: 'k_number_one@gmail.com',
    },
  ];

  const params: RespondentFindAllInPortInputDto = {
    page: 1,
    size: 3,
    sort: 'ASC',
  };
  const findAllRespondentService = new RespondentFindAllService(
    new MockFindAllOutPort(respondentList),
  );
  // new MockFindAllOutPort(
  //   params,
  //   respondentList,
  // );
  test('참여 유저', async () => {
    const findallResult = await findAllRespondentService.execute(params);

    expect(findallResult).toStrictEqual(respondentList);
  });
});
