//create
export type QuestionCreateInput = {
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
};

export type QuestionCreateOutput = {
  id: number;
  question_number: number;
  text: string;
  type: string;
  survey_id: number;
};
//update
export type QuestionUpdateInput = {
  id: number;
  survey_id: number;
  question_number?: number;
  text?: string;
  type?: string;
};
export type QuestionUpdateOutput = {
  id: number;
  survey_id: number;
  question_number: number;
  text: string;
  type: string;
};
//delete
export type QuestionDeleteInput = number;
export type QuestionDeleteOutput = number;
