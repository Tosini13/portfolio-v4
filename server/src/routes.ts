import express from "express";
import {
  createExperience,
  deleteExperience,
  getExperiences,
  updateExperience,
} from "./controllers/experience";
import {
  deleteImage,
  multerConfig,
  updateImage,
  uploadImage,
} from "./controllers/images";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
} from "./controllers/projects";
import {
  createTechnology,
  deleteTechnology,
  getTechnologies,
  updateTechnology,
} from "./controllers/technologies";

const router = express.Router();

// -----------------------------------------
// PROJECTS
router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

// -----------------------------------------
// TECHNOLOGIES
router.get("/technologies", getTechnologies);
router.post("/technologies", createTechnology);
router.put("/technologies/:id", updateTechnology);
router.delete("/technologies/:id", deleteTechnology);

// -----------------------------------------
// EXPERIENCES
router.get("/experiences", getExperiences);
router.post("/experiences", createExperience);
router.put("/experiences/:id", updateExperience);
router.delete("/experiences/:id", deleteExperience);

// -----------------------------------------
// IMAGES
router.post("/images", multerConfig.single("img"), uploadImage);
router.put("/images", multerConfig.single("img"), updateImage);
router.delete("/images", deleteImage);

export default router;
