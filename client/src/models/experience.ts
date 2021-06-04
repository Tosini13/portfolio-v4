import { Id } from "./general";

export const FORMAT_DATE_EXP = "yyyy MMM";

export enum EEndDate {
  "PRESENT" = "PRESENT",
}
export type TEndDate = string | EEndDate.PRESENT;

export enum EExperienceType {
  "EDUCATION" = "EDUCATION",
  "JOB" = "JOB",
}

export interface IExperience {
  id: Id;
  title: string;
  fromDate: string;
  toDate: TEndDate;
  description?: string;
  institution?: string;
  technologies?: string[];
  type: EExperienceType;
}

export type TCreateExperience = Omit<IExperience, "id">;
