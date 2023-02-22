import { setSeederFactory } from 'typeorm-extension';
import { Question } from '../../question/question.entity';

export default setSeederFactory(Question, (faker) => {
  const question = new Question();
  question.text = faker.lorem.lines(1);
  question.type = 'number';

  return question;
});
