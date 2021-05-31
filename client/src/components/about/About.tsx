import { Grid, GridSize, Typography } from "@material-ui/core";
import {
  E_SECTION_BACKGROUND,
  SectionTitle,
  SectionWrapper,
} from "../layout/SectionWrapper";
import PersonalDetails from "./PersonalDetails";
import MyImage from "../../images/me.jpeg";
import styled from "styled-components";
import { E_ROUTES } from "../menu/useRoutes";

const gridSize = {
  xs: 12 as GridSize,
};
const ImgStyled = styled.img`
  width: 100%;
`;

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <SectionWrapper background={E_SECTION_BACKGROUND.EVEN} id={E_ROUTES.about}>
      <SectionTitle>About</SectionTitle>
      <Typography style={{ margin: "20px 0px" }}>
        I am a passionate web programmer collecting more and more technologies
        that I can use for developing projects that I take part in. So far I was
        working mostly as front-end developer, but I use my free time to gain
        skills in backend as well. Meanwhile I spend time on my hobbies
        developing creative projects, my ideas as well :), watching football,
        playing guitar and when there's time travelling.
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ textAlign: "center" }}
          {...gridSize}
          sm={3}
          md={5}
          lg={3}
        >
          <ImgStyled src={MyImage} alt="me" />
        </Grid>
        <Grid
          item
          style={{ textAlign: "center", flexGrow: 1 }}
          {...gridSize}
          sm={9}
          md={7}
          lg={9}
        >
          <PersonalDetails />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default About;
