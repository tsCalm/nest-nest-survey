import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from '../option.entity';
import {
  FindOneOptionOutPort,
  OptionFindOneOutPortInputDto,
  OptionFindOneOutPortOutputDto,
} from '../out-port/option-findone.op';

export class FindOneOptionRepository implements FindOneOptionOutPort {
  constructor(
    @InjectRepository(Option)
    private readonly optionRepo: Repository<Option>,
  ) {}

  execute(
    params: OptionFindOneOutPortInputDto,
  ): Promise<OptionFindOneOutPortOutputDto> {
    return this.optionRepo.findOne({
      where: {
        id: params,
      },
    });
  }
}
