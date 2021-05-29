import { Request, Response } from "express";
import { LeanDocument } from "mongoose";
import Experience, {
  IExperience,
  TExperience,
  TExperienceRes,
} from "../models/experience";

const convertExperience = (
  experience: LeanDocument<IExperience>
): TExperienceRes => ({
  id: experience._id,
  title: experience.title,
  fromDate: experience.fromDate,
  toDate: experience.toDate,
  description: experience.description,
  institution: experience.institution,
  technologies: experience.technologies,
  type: experience.type,
});

export const getExperiences = (req: Request, res: Response) => {
  Experience.find({})
    .then((items) => res.send(items.map((item) => convertExperience(item))))
    .catch((err) => console.log(err));
};

export const createExperience = (req: Request, res: Response) => {
  const experience: TExperience = {
    title: req.body.title,
    fromDate: req.body.fromDate,
    description: req.body.description,
    toDate: req.body.toDate,
    institution: req.body.institution,
    technologies: req.body.technologies,
    type: req.body.type,
  };

  Experience.create(experience)
    .then((createdItem) => res.send(convertExperience(createdItem)))
    .catch((e) => console.log(e));
};

export const updateExperience = async (req: Request, res: Response) => {
  const experience: TExperience = {
    title: req.body.title,
    fromDate: req.body.fromDate,
    description: req.body.description,
    toDate: req.body.toDate,
    institution: req.body.institution,
    technologies: req.body.technologies,
    type: req.body.type,
  };

  try {
    await Experience.updateOne({ _id: req.params.id }, experience);
    res.send(experience);
  } catch (e) {
    res.send(e);
  }
};

export const deleteExperience = (req: Request, res: Response) => {
  Experience.findByIdAndRemove({ _id: req.params.id })
    .then(
      (deletedItem) => deletedItem && res.send(convertExperience(deletedItem))
    )
    .catch((e) => console.log(e));
};
