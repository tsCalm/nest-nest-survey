import { setSeederFactory } from 'typeorm-extension';
import { Option } from '../../option/option.entity';

export default setSeederFactory(Option, (faker) => {
  const option = new Option();
  option.text = faker.lorem.word();
  return option;
});
