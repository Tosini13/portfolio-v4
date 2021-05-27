import { useContext, useState } from "react";
import { Grid } from "@material-ui/core";
import { Project, ProjectsStoreContext } from "../../stores/ProjectsStore";
import { SectionTitle, SectionWrapper } from "../layout/SectionWrapper";
import { E_ROUTES } from "../menu/useRoutes";
import ProjectDetails from "./details/ProjectDetails";
import ProjectSummary from "./ProjectSummary";

export interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const projectsStore = useContext(ProjectsStoreContext);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();
  return (
    <SectionWrapper id={E_ROUTES.portfolio}>
      <SectionTitle>Portfolio</SectionTitle>
      <Grid container justify="space-evenly" spacing={3}>
        {projectsStore.projects.map((project) => (
          <Grid item key={project.id}>
            <ProjectSummary
              project={project}
              selectProject={() => setSelectedProject(project)}
            />
          </Grid>
        ))}
      </Grid>
      <ProjectDetails
        open={Boolean(selectedProject)}
        handleClose={() => setSelectedProject(undefined)}
        project={selectedProject}
      />
    </SectionWrapper>
  );
};

export default Portfolio;
