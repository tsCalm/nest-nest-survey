import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FindOneQuestionOutPort,
  QuestionFindOneOutPortInputDto,
  QuestionFindOneOutPortOutputDto,
} from '../out-port/question-findone.op';
import { Question } from '../question.entity';

export class FindOneQuestionRepository implements FindOneQuestionOutPort {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
  ) {}

  execute(
    params: QuestionFindOneOutPortInputDto,
  ): Promise<QuestionFindOneOutPortOutputDto> {
    return this.questionRepo.findOne({
      where: {
        id: params,
      },
    });
  }
}
