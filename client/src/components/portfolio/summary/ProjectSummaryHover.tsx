import { Grid, Typography } from "@material-ui/core";
import { useContext } from "react";
import styled from "styled-components";
import { IProject } from "../../../models/project";
import { TechnologiesStoreContext } from "../../../stores/TechnologiesStore";
import ProjectSummaryLinks from "./ProjectSummaryLinks";
import ProjectSummaryTechnologies from "./ProjectSummaryTechnologies";

const HoverContainerStyled = styled.div<{
  ishovered: boolean;
}>`
  transition: all 0.3s;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  ${(props) => (props.ishovered ? "opacity: 1;" : "opacity: 0;")}
`;

export interface ProjectSummaryHoverProps {
  project: IProject;
  isHovered: boolean;
  selectProject: () => void;
}

const ProjectSummaryHover: React.FC<ProjectSummaryHoverProps> = ({
  project,
  isHovered,
  selectProject,
}) => {
  const techStore = useContext(TechnologiesStoreContext);
  const frontendTech = techStore.getFrontend.filter((tech) =>
    project.technologies?.includes(tech.id)
  );

  const backendTech = techStore.getBackend.filter((tech) =>
    project.technologies?.includes(tech.id)
  );

  const toolsTech = techStore.getTools.filter((tech) =>
    project.technologies?.includes(tech.id)
  );
  return (
    <HoverContainerStyled ishovered={isHovered}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography color="textSecondary" align="center" variant="h6">
            {project.title}
          </Typography>
        </Grid>
        <Grid item>
          <ProjectSummaryLinks
            gitHub={project.github}
            www={project.www}
            handleMore={selectProject}
          />
        </Grid>
        <Grid item>
          <ProjectSummaryTechnologies technologies={frontendTech} />
        </Grid>
        <Grid item>
          <ProjectSummaryTechnologies technologies={backendTech} />
        </Grid>
        <Grid item>
          <ProjectSummaryTechnologies technologies={toolsTech} />
        </Grid>
      </Grid>
    </HoverContainerStyled>
  );
};
export default ProjectSummaryHover;
