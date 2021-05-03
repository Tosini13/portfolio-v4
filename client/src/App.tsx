import { Drawer } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import SideBar from "./components/menu/SideBar";

const DrawerStyled = styled(Drawer)`
  height: 100vh;
  flex-shrink: 0;
`;

const BodyContainerStyled = styled.div`
  display: flex;
`;

const MainContainerStyled = styled.main`
  flex-grow: 1;
  min-height: 100vh;
`;

function App() {
  return (
    <BodyContainerStyled>
      <DrawerStyled variant="permanent" anchor="left">
        <SideBar />
      </DrawerStyled>
      <MainContainerStyled></MainContainerStyled>
    </BodyContainerStyled>
  );
}

export default App;
