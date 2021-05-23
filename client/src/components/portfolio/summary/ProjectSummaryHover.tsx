import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { IProject } from "../../../models/project";
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
}

const ProjectSummaryHover: React.FC<ProjectSummaryHoverProps> = ({
  project,
  isHovered,
}) => {
  return (
    <HoverContainerStyled ishovered={isHovered}>
      <Typography
        color="textSecondary"
        align="center"
        variant="h6"
        style={{ marginTop: "20px" }}
      >
        {project.title}
      </Typography>
      <ProjectSummaryLinks gitHub={project.github} www={project.www} />
      <ProjectSummaryTechnologies technologiesId={project.technologies ?? []} />
    </HoverContainerStyled>
  );
};
export default ProjectSummaryHover;
