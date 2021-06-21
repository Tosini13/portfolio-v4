import { Grid, IconButton } from "@material-ui/core";
import styled from "styled-components";
import MyImage from "../../images/me.jpeg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { mainTheme } from "../../styled/config";
import TypographyRC from "../../styled/typography";

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
        <TypographyRC color="textSecondary" variant="h5">
          Jakub Bartosik
        </TypographyRC>
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
      <a
        href="https://www.linkedin.com/in/jakub-bartosik-331065184/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <LinkedInIcon color="primary" />
        </IconButton>
      </a>
    </Grid>
    <Grid item>
      <a href="https://github.com/Tosini13" target="_blank" rel="noreferrer">
        <IconButton>
          <GitHubIcon color="primary" />
        </IconButton>
      </a>
    </Grid>
  </Grid>
);
