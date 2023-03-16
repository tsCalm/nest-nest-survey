//create
export type OptionCreateInput = {
  question_id: number;
  option_number: number;
  text: string;
};

export type OptionCreateOutput = {
  id: number;
  question_id: number;
  option_number: number;
  text: string;
};

//update
export type OptionUpdateInput = {
  id: number;
  question_id: number;
  option_number?: number;
  text?: string;
};
export type OptionUpdateOutput = {
  id: number;
  question_id: number;
  option_number: number;
  text: string;
};
//delete
export type OptionDeleteInput = number;
export type OptionDeleteOutput = number;
