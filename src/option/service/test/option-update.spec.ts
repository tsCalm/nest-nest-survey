import { OptionUpdateInPortOutputDto } from '../../../option/in-port/option-update.ip';
import {
  OptionUpdateOutPortInputDto,
  OptionUpdateOutPortOutputDto,
  UpdateOptionOutPort,
} from '../../../option/out-port/option-update.op';
import { OptionUpdateService } from '../option-update.service';

class MockUpdateOutPort implements UpdateOptionOutPort {
  private readonly result: OptionUpdateOutPortOutputDto;

  constructor(result: OptionUpdateOutPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: OptionUpdateOutPortInputDto,
  ): Promise<OptionUpdateOutPortOutputDto> {
    return { ...this.result, ...params };
  }
}

describe('선택지 업데이트', () => {
  const option: OptionUpdateInPortOutputDto = {
    id: 3,
    question_id: 1,
    option_number: 3,
    text: 'java',
  };

  const UpdateOptionService = new OptionUpdateService(
    new MockUpdateOutPort(option),
  );
  test('선택지 이름', async () => {
    const nameUpdateResult = await UpdateOptionService.execute({
      id: 3,
      question_id: 1,
      text: 'c++',
    });

    expect(nameUpdateResult).toStrictEqual({
      id: 3,
      question_id: 1,
      option_number: 3,
      text: 'c++',
    });
  });
});
