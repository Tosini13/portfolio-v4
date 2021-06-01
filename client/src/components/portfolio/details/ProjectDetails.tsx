import {
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import { Project } from "../../../stores/ProjectsStore";
import DialogRC, { DialogContentRC } from "../../../styled/dialog";

const DialogRCStyled = styled(DialogRC)`
  .MuiDialog-paper {
    background-color: transparent;
  }
`;

const ProjectImgStyled = styled.img`
  width: 100%;
`;

const ContentStyled = styled(DialogContentRC)`
  background-color: white;
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
    <DialogRCStyled onClose={handleClose} open={open}>
      {project ? (
        <div>
          <ProjectImgStyled src={project.logoSrc} alt={project.title} />
          <Grid container>
            <Grid item>
              <a href={project.www} target="_blank" rel="noreferrer">
                <IconButton color="primary">
                  <LaunchIcon />
                </IconButton>
              </a>
            </Grid>
            <Grid item>
              <a href={project.github} target="_blank" rel="noreferrer">
                <IconButton color="primary">
                  <GitHubIcon />
                </IconButton>
              </a>
            </Grid>
          </Grid>
          <DialogContentRC style={{ backgroundColor: "white" }}>
            <Typography>{project.description}</Typography>
          </DialogContentRC>
        </div>
      ) : (
        <CircularProgress />
      )}
    </DialogRCStyled>
  );
};

export default ProjectDetails;
