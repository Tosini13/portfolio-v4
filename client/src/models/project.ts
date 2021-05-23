import { Id } from "./general";

export interface IProject {
  id: Id;
  logoSrc: string;
  title: string;
  description?: string;
  www?: string;
  github?: string;
  technologies?: Id[];
}
