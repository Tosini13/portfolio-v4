import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

import { Grid, Hidden, Typography } from "@material-ui/core";

import styled from "styled-components";
import { mainTheme } from "../../styled/config";
import useRoutes from "./useRoutes";
import { parseStyledBoolean } from "../../styled/booleanParser";

const GridContainer = styled(Grid)`
  padding-left: 10px;
`;

export interface MainMenuProps {}

const MainMenu: React.FC<MainMenuProps> = () => {
  const { routes } = useRoutes();
  const Items = (
    <>
      {routes.map((route) => (
        <Grid item key={route.title}>
          <MenuItem path={route.path} icon={route.icon} text={route.title} />
        </Grid>
      ))}
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

const LinkStyled = styled(Link)<{
  current?: string;
}>`
  transition: color 0.25s;
  text-decoration: none;
  color: ${mainTheme.palette.text.secondary};
  ${(props) =>
    props.current ? `color: ${mainTheme.palette.secondary.light};` : ""}
`;

const GridMenuItemContainer = styled(Grid)`
  > div:last-child {
    p {
      text-transform: capitalize;
      transition: margin-left 0.3s;
    }
  }
  &:hover {
    cursor: pointer;
    > div:last-child {
      p {
        margin-left: 5px;
      }
    }
  }
`;

export interface MenuItemProps {
  icon: ReactElement;
  text: string;
  path: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, path }) => {
  const location = useLocation();
  const scrollToSection = () => {
    const el = document.getElementById(path);
    el?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <LinkStyled
      to={path}
      current={parseStyledBoolean(path === location.pathname)}
      onClick={scrollToSection}
    >
      <GridMenuItemContainer container alignItems="center" spacing={2}>
        <Grid item>{icon}</Grid>
        <Grid item>
          <Typography>{text}</Typography>
        </Grid>
      </GridMenuItemContainer>
    </LinkStyled>
  );
};
