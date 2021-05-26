import { CircularProgress, Dialog } from "@material-ui/core";
import styled from "styled-components";
import { Project } from "../../../stores/ProjectsStore";

const ProjectImgStyled = styled.img`
  width: 100%;
`;

export interface ProjectDetailsProps {
  open: boolean;
  handleClose: () => void;
  project?: Project;
}

const ProjectDetails: React.SFC<ProjectDetailsProps> = ({
  handleClose,
  open,
  project,
}) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      {project ? (
        <div>
          <ProjectImgStyled src={project.logoSrc} alt={project.title} />
        </div>
      ) : (
        <CircularProgress />
      )}
    </Dialog>
  );
};

export default ProjectDetails;
