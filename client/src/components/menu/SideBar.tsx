import { Grid, IconButton, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import styled from "styled-components";
import { mainTheme } from "../../styled/config";
import MainMenu from "./MainMenu";
import SideBarHeader from "./SideBarHeader";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { E_ROUTES } from "../../hooks/useRoutes";

const SideBarContainer = styled.div`
  padding: 10px 20px;
  background-color: ${mainTheme.palette.secondary.main};
  color: ${mainTheme.palette.text.secondary};
  height: 100%;
`;

export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <SideBarContainer>
      <Grid container direction="column" style={{ height: "100%" }}>
        <Grid item style={{ marginBottom: "20px" }}>
          <SideBarHeader />
        </Grid>
        <Grid item>
          <MainMenu />
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <SideBarFooter />
        </Grid>
      </Grid>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarFooter = () => {
  const router = useHistory();
  return (
    <Grid
      container
      direction="column"
      style={{ height: "100%" }}
      justify="flex-end"
      alignItems="center"
    >
      <Grid item>
        <IconButton onClick={() => router.push(E_ROUTES.login)}>
          <LockOpenIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography>tel: +48 696 993 916</Typography>
      </Grid>
    </Grid>
  );
};
