import { useState } from "react";
import styled from "styled-components";
import { Hidden, Paper } from "@material-ui/core";
import ProjectSummaryHover from "./summary/ProjectSummaryHover";
import { IProject } from "../../models/project";

const PaperStyled = styled(Paper)<{
  imgSrc: string;
}>`
  position: relative;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.imgSrc});
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
          imgSrc={project.logoSrc}
        >
          <ProjectSummaryHover
            isHovered={isHovered}
            project={project}
            selectProject={selectProject}
          />
        </PaperStyled>
      </Hidden>
      <Hidden mdUp>
        <PaperStyled
          onClick={selectProject}
          imgSrc={project.logoSrc}
        ></PaperStyled>
      </Hidden>
    </>
  );
};

export default ProjectSummary;
