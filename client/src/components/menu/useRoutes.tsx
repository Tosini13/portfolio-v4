import { ReactElement } from "react";

import {
  Home,
  PermIdentity,
  Description,
  MailOutline,
  Camera,
  CardTravel,
} from "@material-ui/icons";

export enum E_ROUTES {
  "home" = "/home",
  "about" = "/about",
  "resume" = "/resume",
  "portfolio" = "/portfolio",
  "services" = "/services",
  "contact" = "/contact",
}

type TRoute = {
  icon: ReactElement;
  title: string;
  path: string;
};

const useRoutes = () => {
  const routes: TRoute[] = [
    {
      icon: <Home />,
      path: E_ROUTES.home,
      title: "home",
    },
    {
      icon: <PermIdentity />,
      path: E_ROUTES.about,
      title: "about",
    },
    {
      icon: <Description />,
      path: E_ROUTES.resume,
      title: "resume",
    },
    {
      icon: <Camera />,
      path: E_ROUTES.portfolio,
      title: "portfolio",
    },
    {
      icon: <CardTravel />,
      path: E_ROUTES.services,
      title: "services",
    },
    {
      icon: <MailOutline />,
      path: E_ROUTES.contact,
      title: "contact",
    },
  ];

  return {
    routes,
  };
};

export default useRoutes;