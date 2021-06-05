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
import ProjectSummaryTechnologies from "../summary/ProjectSummaryTechnologies";
import { TechnologiesStoreContext } from "../../../stores/TechnologiesStore";
import { useContext } from "react";
import { mainTheme } from "../../../styled/config";

const DialogRCStyled = styled(DialogRC)`
  .MuiDialog-paper {
    background-color: ${mainTheme.palette.primary.main};
  }
`;

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
  const techStore = useContext(TechnologiesStoreContext);

  if (!project) {
    return <CircularProgress />;
  }

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
    <DialogRCStyled onClose={handleClose} open={open}>
      <div>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <a href={project.www} target="_blank" rel="noreferrer">
              <IconButton color="secondary">
                <LaunchIcon />
              </IconButton>
            </a>
          </Grid>
          <Grid item>
            <a href={project.github} target="_blank" rel="noreferrer">
              <IconButton color="secondary">
                <GitHubIcon />
              </IconButton>
            </a>
          </Grid>
        </Grid>
        <ProjectImgStyled src={project.logoSrc} alt={project.title} />
        <DialogContentRC style={{ backgroundColor: "white" }}>
          <Typography>{project.description}</Typography>
          <Grid
            container
            direction="column"
            spacing={1}
            style={{ marginTop: "5px" }}
          >
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
        </DialogContentRC>
      </div>
    </DialogRCStyled>
  );
};

export default ProjectDetails;
