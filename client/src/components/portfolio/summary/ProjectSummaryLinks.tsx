import { Grid, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

export interface ProjectSummaryLinksProps {
  gitHub?: string;
  www?: string;
}

const ProjectSummaryLinks: React.SFC<ProjectSummaryLinksProps> = ({
  gitHub,
  www,
}) => {
  return (
    <Grid container alignItems="center" justify="center" spacing={3}>
      {www ? (
        <Grid item>
          <a href={www} target="_blank" rel="noreferrer">
            <IconButton color="primary">
              <LaunchIcon />
            </IconButton>
          </a>
        </Grid>
      ) : null}
      {gitHub ? (
        <Grid item>
          <a href={gitHub} target="_blank" rel="noreferrer">
            <IconButton color="primary">
              <GitHubIcon />
            </IconButton>
          </a>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default ProjectSummaryLinks;
