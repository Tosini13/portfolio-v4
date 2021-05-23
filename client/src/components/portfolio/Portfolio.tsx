import { Grid } from "@material-ui/core";
import { useContext } from "react";
import { ProjectsStoreContext } from "../../stores/ProjectsStore";
import { SectionHeader, SectionWrapper } from "../layout/SectionWrapper";
import { E_ROUTES } from "../menu/useRoutes";
import ProjectSummary from "./ProjectSummary";

export interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const projectsStore = useContext(ProjectsStoreContext);
  return (
    <SectionWrapper id={E_ROUTES.portfolio}>
      <SectionHeader>Portfolio</SectionHeader>
      <Grid container justify="space-evenly" spacing={3}>
        {projectsStore.projects.map((project) => (
          <Grid item key={project.id}>
            <ProjectSummary project={project} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Portfolio;
