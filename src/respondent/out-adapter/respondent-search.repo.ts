import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import {
  RespondentSearchOutPortInputDto,
  RespondentSearchOutPortOutputDto,
  SearchRespondentOutPort,
} from '../out-port/respondent-search.op';
import { Respondent } from '../respondent.entity';

export class SearchRespondentRepository implements SearchRespondentOutPort {
  constructor(
    @InjectRepository(Respondent)
    private readonly questionRepo: Repository<Respondent>,
  ) {}

  execute(
    params: RespondentSearchOutPortInputDto,
  ): Promise<RespondentSearchOutPortOutputDto> {
    return this.questionRepo.find({
      where: {
        name: Like(`%${params.keyword}%`),
      },
      skip: (params.page - 1) * params.size,
      take: params.size,
      order: {
        id: params.sort,
      },
    });
  }
}
