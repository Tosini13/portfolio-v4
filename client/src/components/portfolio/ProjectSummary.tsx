import { useState } from "react";
import styled from "styled-components";
import { Hidden, Paper } from "@material-ui/core";
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
  selectProject: () => void;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({
  project,
  selectProject,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <>
      <Hidden smDown>
        <PaperStyled
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ProjectImgStyled src={project.logoSrc} alt={project.title} />
          <ProjectSummaryHover
            isHovered={isHovered}
            project={project}
            selectProject={selectProject}
          />
        </PaperStyled>
      </Hidden>
      <Hidden mdUp>
        <PaperStyled onClick={selectProject}>
          <ProjectImgStyled src={project.logoSrc} alt={project.title} />
        </PaperStyled>
      </Hidden>
    </>
  );
};

export default ProjectSummary;
