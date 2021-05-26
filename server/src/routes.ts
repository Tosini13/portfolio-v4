import express from "express";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
} from "./controllers/projects";

const router = express.Router();

// -----------------------------------------
// PROJECTS
router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

export default router;
