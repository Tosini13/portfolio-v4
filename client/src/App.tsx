import { Drawer, Hidden } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import About from "./components/about/About";
import Home from "./components/home/Home";
import SideBar from "./components/menu/SideBar";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import Hamburger from "./styled/buttons";

const drawerWidth = "250px";

const DrawerStyled = styled(Drawer)`
  height: 100vh;
  @media only screen and (min-width: 481px) {
    width: ${drawerWidth};
  }
  .MuiPaper-root {
    width: ${drawerWidth};
  }
`;

const BodyContainerStyled = styled.div`
  display: flex;
`;

const MainContainerStyled = styled.main`
  min-height: 100vh;
  flex-grow: 1;
  padding-bottom: 50px;
`;

function App() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <BodyContainerStyled>
      <Hidden smDown>
        <DrawerStyled variant="permanent" anchor="left">
          <SideBar />
        </DrawerStyled>
      </Hidden>
      <Hidden mdUp>
        <DrawerStyled
          variant="temporary"
          anchor="left"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <SideBar />
        </DrawerStyled>
        <Hamburger
          open={openDrawer}
          toggleOpen={() => setOpenDrawer(!openDrawer)}
        />
      </Hidden>
      <MainContainerStyled>
        <Home />
        <About />
        <Skills />
        <Resume />
      </MainContainerStyled>
    </BodyContainerStyled>
  );
}

export default App;
