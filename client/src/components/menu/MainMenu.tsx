import { ReactElement } from "react";
import { Grid, Hidden, Typography } from "@material-ui/core";
import {
  Home,
  PermIdentity,
  Description,
  MailOutline,
  Camera,
  CardTravel,
} from "@material-ui/icons";
import styled from "styled-components";

const GridContainer = styled(Grid)`
  padding-left: 10px;
`;

export interface MainMenuProps {}

const MainMenu: React.FC<MainMenuProps> = () => {
  const Items = (
    <>
      <Grid item>
        <MenuItem icon={<Home />} text="Home" />
      </Grid>
      <Grid item>
        <MenuItem icon={<PermIdentity />} text="About" />
      </Grid>
      <Grid item>
        <MenuItem icon={<Description />} text="Resume" />
      </Grid>
      <Grid item>
        <MenuItem icon={<Camera />} text="Portfolio" />
      </Grid>
      <Grid item>
        <MenuItem icon={<CardTravel />} text="Services" />
      </Grid>
      <Grid item>
        <MenuItem icon={<MailOutline />} text="Contact" />
      </Grid>
    </>
  );

  return (
    <>
      <Hidden xsDown>
        <GridContainer container direction="column" spacing={3}>
          {Items}
        </GridContainer>
      </Hidden>
      <Hidden smUp>
        <GridContainer container direction="column" spacing={2}>
          {Items}
        </GridContainer>
      </Hidden>
    </>
  );
};

export default MainMenu;

export interface MenuItemProps {
  icon: ReactElement;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text }) => (
  <Grid container alignItems="center" spacing={2}>
    <Grid item>{icon}</Grid>
    <Grid item>
      <Typography>{text}</Typography>
    </Grid>
  </Grid>
);
