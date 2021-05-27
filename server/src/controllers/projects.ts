import { Request, Response } from "express";
import { LeanDocument } from "mongoose";
import Project, { IProject, TProject, TProjectRes } from "../models/project";

const convertProject = (project: LeanDocument<IProject>): TProjectRes => ({
  id: project._id,
  logoSrc: project.logoSrc,
  title: project.title,
  description: project.description,
  www: project.www,
  github: project.github,
  technologies: project.technologies,
});

export const getProjects = (req: Request, res: Response) => {
  Project.find({})
    .then((items) => res.send(items.map((item) => convertProject(item))))
    .catch((err) => console.log(err));
};

export const createProject = (req: Request, res: Response) => {
  const project: TProject = {
    logoSrc: req.body.logoSrc,
    title: req.body.title,
    description: req.body.description,
    www: req.body.www,
    github: req.body.github,
    technologies: req.body.technologies,
  };

  Project.create(project)
    .then((createdItem) => res.send(convertProject(createdItem)))
    .catch((e) => console.log(e));
};

export const updateProject = async (req: Request, res: Response) => {
  const project: TProject = {
    logoSrc: req.body.logoSrc,
    title: req.body.title,
    description: req.body.description,
    www: req.body.www,
    github: req.body.github,
    technologies: req.body.technologies,
  };

  try {
    await Project.updateOne({ _id: req.params.id }, project);
    res.send(project);
  } catch (e) {
    res.send(e);
  }
};

export const deleteProject = (req: Request, res: Response) => {
  Project.findByIdAndRemove({ _id: req.params.id })
    .then((deletedItem) => deletedItem && res.send(convertProject(deletedItem)))
    .catch((e) => console.log(e));
};
