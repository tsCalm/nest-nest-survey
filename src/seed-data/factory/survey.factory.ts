import { setSeederFactory } from 'typeorm-extension';
import { Survey } from '../../survey/survey.entity';

export default setSeederFactory(Survey, (faker) => {
  const survey = new Survey();
  survey.name = faker.lorem.lines(1);
  survey.description = faker.lorem.lines(2);
  return survey;
});
