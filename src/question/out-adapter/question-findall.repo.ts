import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FindAllQuestionOutPort,
  QuestionFindAllOutPortInputDto,
  QuestionFindAllOutPortOutputDto,
} from '../out-port/question-findall.op';
import { Question } from '../question.entity';

export class FindAllQuestionRepository implements FindAllQuestionOutPort {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
  ) {}

  execute(
    params: QuestionFindAllOutPortInputDto,
  ): Promise<QuestionFindAllOutPortOutputDto> {
    return this.questionRepo.find({
      skip: (params.page - 1) * params.size,
      take: params.size,
      order: {
        question_number: params.sort,
      },
    });
  }
}
