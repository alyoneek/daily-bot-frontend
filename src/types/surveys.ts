export interface ISurveyRequest {
  title: string;
  chanelId: number | undefined;
  type: ScheduleType;
  time: string | null;
  interval: number | null;
  daysTime: {
    monday: Time;
    tuesday: Time;
    wednesday: Time;
    thursday: Time;
    friday: Time;
    saturday: Time;
    sunday: Time;
  } | null;
  questions: string[];
}

type ScheduleType = "day" | "week";
type Time = string | null;
