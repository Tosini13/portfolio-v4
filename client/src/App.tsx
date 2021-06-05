import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Drawer, Hidden } from "@material-ui/core";
import styled from "styled-components";
import About from "./components/about/About";
import SideBar from "./components/menu/SideBar";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import Hamburger from "./styled/buttons";
import Portfolio from "./components/portfolio/Portfolio";
import { E_ROUTES } from "./hooks/useRoutes";
import Login from "./components/auth/Login";

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
`;

function App() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <BodyContainerStyled>
        <Hidden smDown>
          <DrawerStyled variant="permanent" anchor="left">
            <SideBar />
          </DrawerStyled>
        </Hidden>
        <Switch>
          <Route exact path={E_ROUTES.login}>
            <Login />
          </Route>
          <Route path={"/"}>
            <>
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
                <About />
                <Skills />
                <Resume />
                <Portfolio />
              </MainContainerStyled>
            </>
          </Route>
        </Switch>
      </BodyContainerStyled>
    </BrowserRouter>
  );
}

export default App;
