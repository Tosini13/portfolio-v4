import { Id } from "./general";

export enum ETechnologyField {
  "FRONTEND" = "FRONTEND",
  "BACKEND" = "BACKEND",
  "TOOLS" = "TOOLS",
}

export interface ITechnology {
  id: Id;
  logoSrc: string;
  title: string;
  field: ETechnologyField;
}

export type TCreateTechnology = Omit<ITechnology, "id">;

export type TTechGroup = {
  field: ETechnologyField;
  technologies: ITechnology[];
};
