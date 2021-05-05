import { Grid, IconButton, Typography } from "@material-ui/core";
import styled from "styled-components";
import MyImage from "../../images/me.jpeg";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { mainTheme } from "../../styled/config";

const ImgStyled = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: ${mainTheme.palette.secondary.light} solid 2px;
  padding: 5px;
`;

export interface SideBarHeaderProps {}

const SideBarHeader: React.FC<SideBarHeaderProps> = () => {
  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid item>
        <ImgStyled src={MyImage} alt="my_image" />
      </Grid>
      <Grid item>
        <Typography>Jakub Bartosik</Typography>
      </Grid>
      <Grid item>
        <Media />
      </Grid>
    </Grid>
  );
};

export default SideBarHeader;

const Media = () => (
  <Grid container alignItems="center" justify="center" spacing={1}>
    <Grid item>
      <IconButton>
        <FacebookIcon color="primary" />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton>
        <LinkedInIcon color="primary" />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton>
        <GitHubIcon color="primary" />
      </IconButton>
    </Grid>
  </Grid>
);
