import { Grid, GridSize, Paper } from "@material-ui/core";
import styled from "styled-components";
import HTML from "../../images/technologies/html5.png";
import CSS from "../../images/technologies/css3.jpg";
import JS from "../../images/technologies/javaScript.jpg";
import TS from "../../images/technologies/typeScript.png";
import FIREBASE from "../../images/technologies/firebase.webp";
import PHP from "../../images/technologies/php.webp";
import SkillSummary from "./SkillSummary";
import {
  E_SECTION_BACKGROUND,
  SectionHeader,
  SectionWrapper,
} from "../layout/SectionWrapper";
import { mainTheme } from "../../styled/config";

const gridSize = {
  sm: 5 as GridSize,
  xs: 12 as GridSize,
};

const FrontendBox = styled(Paper)`
  border: ${mainTheme.palette.secondary.light} solid 1px;
  padding: 5px;
  padding-right: 20px;
  position: relative;
  overflow: hidden;
`;

const BackendBox = styled(FrontendBox)`
  border-color: rgba(0, 0, 0, 0.3);
`;

const BoxTitle = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 14px;
  letter-spacing: 0.7px;
  font-weight: bold;
  background-color: ${mainTheme.palette.secondary.light};
  color: white;
  transform: translate(29%, 65%) rotate(45deg);
  padding: 1px 20px;
`;

const BoxBackendTitle = styled(BoxTitle)`
  background-color: rgba(0, 0, 0, 0.3);
`;

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <SectionWrapper background={E_SECTION_BACKGROUND.ODD}>
      <SectionHeader>Skills</SectionHeader>
      <div style={{ padding: "0px 10px" }}>
        <Grid container justify="space-evenly" spacing={3}>
          <Grid item>
            <FrontendBox variant="elevation">
              <BoxTitle>FrontEnd</BoxTitle>
              <Grid container spacing={1} justify="space-evenly">
                {frontEndTechnologies.map((technology) => (
                  <Grid item xs={gridSize.xs} sm={gridSize.sm}>
                    <SkillSummary
                      logoSrc={technology.logoSrc}
                      title={technology.title}
                    />
                  </Grid>
                ))}
              </Grid>
            </FrontendBox>
          </Grid>
          <Grid item>
            <BackendBox variant="elevation">
              <BoxBackendTitle>BackEnd</BoxBackendTitle>
              <Grid container spacing={1} justify="space-evenly">
                {backEndTechnologies.map((technology) => (
                  <Grid item xs={gridSize.xs} sm={gridSize.sm}>
                    <SkillSummary
                      logoSrc={technology.logoSrc}
                      title={technology.title}
                    />
                  </Grid>
                ))}
              </Grid>
            </BackendBox>
          </Grid>
          <Grid item>
            <BackendBox variant="elevation">
              <BoxBackendTitle>Manage</BoxBackendTitle>
              <Grid container spacing={1} justify="space-evenly">
                {backEndTechnologies.map((technology) => (
                  <Grid item xs={gridSize.xs} sm={gridSize.sm}>
                    <SkillSummary
                      logoSrc={technology.logoSrc}
                      title={technology.title}
                    />
                  </Grid>
                ))}
              </Grid>
            </BackendBox>
          </Grid>
        </Grid>
      </div>
    </SectionWrapper>
  );
};

export default Skills;

type TTechnology = {
  logoSrc: string;
  title: string;
};

const frontEndTechnologies: TTechnology[] = [
  {
    logoSrc: HTML,
    title: "HTML 5",
  },
  {
    logoSrc: CSS,
    title: "CSS 5",
  },
  {
    logoSrc: JS,
    title: "JavaScript",
  },
  {
    logoSrc: TS,
    title: "TypeScript",
  },
];

const backEndTechnologies: TTechnology[] = [
  {
    logoSrc: FIREBASE,
    title: "Node.js",
  },
  {
    logoSrc: FIREBASE,
    title: "Firebase",
  },
  {
    logoSrc: PHP,
    title: "PHP",
  },
];
