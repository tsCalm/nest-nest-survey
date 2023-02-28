import { Option } from 'src/option/option.entity';
import { Question } from 'src/question/question.entity';
import { Survey } from 'src/survey/survey.entity';
import { DataSource, IsNull } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class RootSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const surveyFactory = factoryManager.get(Survey);
    const questionFactory = factoryManager.get(Question);
    const optionFactory = factoryManager.get(Option);

    // const surveyRepo = dataSource.getRepository(Survey);

    // const surveyList = await surveyFactory.saveMany(1000);
    let startIdx = 20001;
    let lastIds = 2500007;
    const surveyList = [];

    while (true) {
      const itemLastIdx = startIdx + 29999;
      const isLast = itemLastIdx > lastIds;
      const item = [startIdx, isLast ? lastIds : itemLastIdx];
      surveyList.push(item);
      if (isLast) break;
      startIdx += 30000;
    }
    console.log(surveyList);
    // const surveyList = await surveyRepo
    //   .createQueryBuilder('s')
    //   .select('s.id')
    //   .leftJoinAndSelect('s.question', 'q')
    //   .where('q.survey_id IS NULL')
    //   .take(10000)
    //   .getOne();
    // console.log(surveyList);

    let questionPendingList = [];
    let optionPendingList = [];
    while (surveyList.length > 0) {
      const surveyPop = surveyList.pop();
      for (let start = surveyPop[0]; start <= surveyPop[1]; start++) {
        const newQuestion = questionFactory.save({
          survey_id: start,
          question_number: 1,
        });
        questionPendingList.push(newQuestion);
      }
      const questionList = await Promise.all(questionPendingList);
      for (const question of questionList) {
        const newOption = optionFactory.save({
          question_id: question.id,
          option_number: 1,
        });
        optionPendingList.push(newOption);
      }

      await Promise.all(optionPendingList);
      questionPendingList = [];
      optionPendingList = [];
    }
  }
}
