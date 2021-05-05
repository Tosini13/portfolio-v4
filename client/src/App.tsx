import { Drawer } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import About from "./components/about/About";
import Home from "./components/home/Home";
import SideBar from "./components/menu/SideBar";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";

const drawerWidth = "250px";

const DrawerStyled = styled(Drawer)`
  height: 100vh;
  width: ${drawerWidth};
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
  return (
    <BodyContainerStyled>
      <DrawerStyled variant="permanent" anchor="left">
        <SideBar />
      </DrawerStyled>
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
