import { Grid, GridSize } from "@material-ui/core";
import {
  E_SECTION_BACKGROUND,
  SectionTitle,
  SectionWrapper,
} from "../layout/SectionWrapper";
import PersonalDetails from "./PersonalDetails";
import MyImage from "../../images/me.png";
import styled from "styled-components";
import { E_ROUTES } from "../../hooks/useRoutes";
import TypographyRC from "../../styled/typography";

const gridSize = {
  xs: 12 as GridSize,
};

const TypographyStyled = styled(TypographyRC)`
  margin: 0px auto;
  margin-bottom: 60px;
  max-width: 600px;
  text-align: justify;
`;

const ImgStyled = styled.img`
  width: 100%;
`;

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <SectionWrapper background={E_SECTION_BACKGROUND.EVEN} id={E_ROUTES.about}>
      <SectionTitle>About</SectionTitle>
      <TypographyStyled color="textPrimary">
        I am a passionate web programmer collecting more and more technologies
        that I can use for developing projects that I take part in. So far I was
        working mostly as front-end developer, but I use my free time to gain
        skills in backend as well. Meanwhile I spend time on my hobbies
        developing creative projects, my ideas as well :), watching football,
        playing guitar and when there's time travelling.
      </TypographyStyled>
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
