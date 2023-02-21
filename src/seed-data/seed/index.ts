import { Survey } from 'src/survey/survey.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export default class CatsSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Survey);
    await repository.insert([
      {
        name: '테스트 설문지',
        description: '설문지 설명입니다. 성실한 답변 부탁드립니다.',
      },
    ]);
  }
}
