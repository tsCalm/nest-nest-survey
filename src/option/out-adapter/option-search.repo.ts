import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Option } from '../option.entity';
import {
  OptionSearchOutPortInputDto,
  OptionSearchOutPortOutputDto,
  SearchOptionOutPort,
} from '../out-port/option-search.op';

export class SearchOptionRepository implements SearchOptionOutPort {
  constructor(
    @InjectRepository(Option)
    private readonly questionRepo: Repository<Option>,
  ) {}

  execute(
    params: OptionSearchOutPortInputDto,
  ): Promise<OptionSearchOutPortOutputDto> {
    return this.questionRepo.find({
      where: {
        text: Like(`%${params.keyword}%`),
      },
      skip: (params.page - 1) * params.size,
      take: params.size,
      order: {
        option_number: params.sort,
      },
    });
  }
}
