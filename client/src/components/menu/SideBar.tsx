import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { mainTheme } from "../../styled/config";
import MainMenu from "./MainMenu";
import SideBarHeader from "./SideBarHeader";

const SideBarContainer = styled.div`
  width: 240px;
  padding: 10px 20px;
  background-color: ${mainTheme.palette.secondary.main};
  color: ${mainTheme.palette.text.secondary};
  height: 100%;
`;

export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <SideBarContainer>
      <Grid container direction="column" spacing={4} style={{ height: "100%" }}>
        <Grid item>
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

const SideBarFooter = () => (
  <Grid
    container
    direction="column"
    style={{ height: "100%" }}
    justify="flex-end"
    alignItems="center"
  >
    <Grid item>
      <Typography>tel: +48 696 993 916</Typography>
    </Grid>
  </Grid>
);
