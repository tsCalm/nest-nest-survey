import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  QuestionUpdateOutPortInputDto,
  QuestionUpdateOutPortOutputDto,
  UpdateQuestionOutPort,
} from '../out-port/question-update.op';
import { Question } from '../question.entity';

export class UpdateQuestionRepository implements UpdateQuestionOutPort {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
  ) {}

  async execute(
    params: QuestionUpdateOutPortInputDto,
  ): Promise<QuestionUpdateOutPortOutputDto> {
    const findedQuestion = await this.questionRepo.findOne({
      where: {
        id: params.id,
      },
    });
    return this.questionRepo.save({ ...findedQuestion, ...params });
  }
}
