import { ReactElement } from "react";

import {
  PermIdentity,
  Build,
  Brush,
  Description,
  // MailOutline,
  // CardTravel,
} from "@material-ui/icons";

export enum E_ROUTES {
  "home" = "/home",
  "about" = "/about",
  "skills" = "/skills",
  "resume" = "/resume",
  "portfolio" = "/portfolio",
  "services" = "/services",
  "contact" = "/contact",
  "login" = "/login",
  "signUp" = "/sign-up",
  "resetPassword" = "/reset-password",
}

type TRoute = {
  icon: ReactElement;
  title: string;
  path: string;
};

const useRoutes = () => {
  const routes: TRoute[] = [
    // {
    //   icon: <Home />,
    //   path: E_ROUTES.home,
    //   title: "home",
    // },
    {
      icon: <PermIdentity />,
      path: E_ROUTES.about,
      title: "about",
    },
    {
      icon: <Build />,
      path: E_ROUTES.skills,
      title: "skills",
    },
    {
      icon: <Description />,
      path: E_ROUTES.resume,
      title: "resume",
    },
    {
      icon: <Brush />,
      path: E_ROUTES.portfolio,
      title: "portfolio",
    },
    // {
    //   icon: <CardTravel />,
    //   path: E_ROUTES.services,
    //   title: "services",
    // },
    // {
    //   icon: <MailOutline />,
    //   path: E_ROUTES.contact,
    //   title: "contact",
    // },
  ];

  return {
    routes,
  };
};

export default useRoutes;
