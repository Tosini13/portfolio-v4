import { useState } from "react";
import styled from "styled-components";
import { Paper } from "@material-ui/core";
import ProjectSummaryHover from "./summary/ProjectSummaryHover";
import { IProject } from "../../models/project";

const PaperStyled = styled(Paper)`
  position: relative;
  width: 500px;
  @media only screen and (max-width: 550px) {
    width: 300px;
  }
`;

const ProjectImgStyled = styled.img`
  width: 100%;
`;

export interface ProjectSummaryProps {
  project: IProject;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <PaperStyled
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProjectImgStyled src={project.logoSrc} alt={project.title} />
      <ProjectSummaryHover isHovered={isHovered} project={project} />
    </PaperStyled>
  );
};

export default ProjectSummary;
