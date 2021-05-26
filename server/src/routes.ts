import express from "express";
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

export default router;
