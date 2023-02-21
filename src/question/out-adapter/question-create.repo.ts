import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateQuestionOutPort,
  QuestionCreateOutPortInputDto,
  QuestionCreateOutPortOutputDto,
} from '../out-port/question-create.op';
import { Question } from '../question.entity';

export class CreateQuestionRepository implements CreateQuestionOutPort {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
  ) {}

  execute(
    params: QuestionCreateOutPortInputDto,
  ): Promise<QuestionCreateOutPortOutputDto> {
    return this.questionRepo.save(params);
  }
}
