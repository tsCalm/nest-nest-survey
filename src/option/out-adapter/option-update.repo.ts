import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from '../option.entity';
import {
  OptionUpdateOutPortInputDto,
  OptionUpdateOutPortOutputDto,
  UpdateOptionOutPort,
} from '../out-port/option-update.op';

export class UpdateOptionRepository implements UpdateOptionOutPort {
  constructor(
    @InjectRepository(Option)
    private readonly questionRepo: Repository<Option>,
  ) {}

  async execute(
    params: OptionUpdateOutPortInputDto,
  ): Promise<OptionUpdateOutPortOutputDto> {
    const findedOption = await this.questionRepo.findOne({
      where: {
        id: params.id,
      },
    });
    return this.questionRepo.save({ ...findedOption, ...params });
  }
}
