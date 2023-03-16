import { setSeederFactory } from 'typeorm-extension';
import { Option } from '../../modules/option/option.entity';

export default setSeederFactory(Option, (faker) => {
  const option = new Option();
  option.text = faker.lorem.word();
  return option;
});
