import { IGroupRequest } from "@/types/groups";
import { ISurveyRequest } from "@/types/surveys";

export const questionDefaultValues = "";

export const surveyDefaultValues: ISurveyRequest = {
  title: "",
  chanelId: undefined,
  type: "day",
  time: null,
  interval: null,
  daysTime: null,
  questions: [questionDefaultValues],
};

export const groupDefaultValues: IGroupRequest = {
  name: "",
  users: [],
  surveys: [surveyDefaultValues],
};
