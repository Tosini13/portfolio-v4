import { Grid, GridSize } from "@material-ui/core";
import {
  E_SECTION_BACKGROUND,
  SectionTitle,
  SectionWrapper,
} from "../layout/SectionWrapper";
import PersonalDetails from "./PersonalDetails";
import MyImage from "../../images/me.jpeg";
import styled from "styled-components";
import { E_ROUTES } from "../../hooks/useRoutes";
import TypographyRC from "../../styled/typography";
import { mainTheme } from "../../styled/config";

const gridSize = {
  xs: 12 as GridSize,
};

const TypographyStyled = styled(TypographyRC)`
  margin: 0px auto;
  margin-bottom: 60px;
  max-width: 600px;
  text-align: justify;
`;

const ImgContainer = styled.div`
  width: fit-content;
  height: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 50px;
    height: 50px;
    border-left: 1px solid ${mainTheme.palette.secondary.light};
    border-top: 1px solid ${mainTheme.palette.secondary.light};
  }
`;

const ImgStyled = styled.img`
  width: 100%;
  padding: 5px;
`;

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <SectionWrapper background={E_SECTION_BACKGROUND.EVEN} id={E_ROUTES.about}>
      <SectionTitle>About</SectionTitle>
      <TypographyStyled color="textPrimary">
        I am passionate web programmer collecting more and more technologies
        that I can use for developing projects that I take part in. So far I was
        working mostly as front-end developer and occasionally as full-stack
        developer. Meanwhile I spend time on my hobbies developing creative
        projects covering commissions as well as my own ideas and improving
        skills, watching football, playing guitar and travelling.
      </TypographyStyled>
      <Grid
        container
        spacing={2}
        justify="space-around"
        style={{ maxWidth: "100%" }}
      >
        <Grid
          item
          style={{ textAlign: "center" }}
          {...gridSize}
          sm={3}
          md={5}
          lg={3}
        >
          <ImgContainer>
            <ImgStyled src={MyImage} alt="me" />
          </ImgContainer>
        </Grid>
        <Grid
          item
          style={{ textAlign: "center", flexGrow: 1 }}
          {...gridSize}
          sm={8}
          md={5}
          lg={7}
        >
          <PersonalDetails />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default About;
