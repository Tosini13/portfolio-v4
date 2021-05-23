import ChampionsYouthDesktop from "../../images/portfolio/championsYouthDesktop.png";
import MedlineDesktop from "../../images/portfolio/medlineDesktop.png";
import PallotyniDesktop from "../../images/portfolio/pallotyniDesktop.png";
import Portfoliov4Desktop from "../../images/portfolio/portfoliov4Desktop.png";
import { IProject } from "../../models/project";

export const mockPortfolio: IProject[] = [
  {
    id: "1",
    logoSrc: ChampionsYouthDesktop,
    title: "Champions Youth",
    www: "https://champions-youth.web.app/",
    github: "https://github.com/Tosini13/champions_youth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["1", "2", "3", "4", "5", "7", "8", "10"],
  },
  {
    id: "2",
    logoSrc: PallotyniDesktop,
    title: "Pallotyni",
    www: "http://pallotyniszczecin.pl/",
    github: "https://github.com/Tosini13/pallotyni-production",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "3",
    logoSrc: MedlineDesktop,
    title: "Med Line",
    www: "https://medline-9bd59.web.app/",
    github: "https://github.com/Tosini13/medline",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "4",
    logoSrc: Portfoliov4Desktop,
    title: "Portfolio",
    www: "https://portfolio-v4.herokuapp.com/",
    github: "https://github.com/Tosini13/portfolio-v4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
