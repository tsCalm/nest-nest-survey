import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import {
  QuestionSearchOutPortInputDto,
  QuestionSearchOutPortOutputDto,
  SearchQuestionOutPort,
} from '../out-port/question-search.op';
import { Question } from '../question.entity';

export class SearchQuestionRepository implements SearchQuestionOutPort {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
  ) {}

  execute(
    params: QuestionSearchOutPortInputDto,
  ): Promise<QuestionSearchOutPortOutputDto> {
    return this.questionRepo.find({
      where: {
        text: Like(`%${params.keyword}%`),
      },
      skip: (params.page - 1) * params.size,
      take: params.size,
      order: {
        question_number: params.sort,
      },
    });
  }
}
