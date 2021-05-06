import { Grid, Typography } from "@material-ui/core";
import {
  E_SECTION_BACKGROUND,
  SectionHeader,
  SectionWrapper,
} from "../layout/SectionWrapper";
import PersonalDetails from "./PersonalDetails";
import MyImage from "../../images/me.jpeg";
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 100%;
  max-width: 300px;
`;

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <SectionWrapper background={E_SECTION_BACKGROUND.EVEN}>
      <SectionHeader>About</SectionHeader>
      <Grid container justify="space-evenly">
        <Grid item sm={12} md={3} style={{ textAlign: "center" }}>
          <ImgStyled src={MyImage} alt="me" />
        </Grid>
        <Grid item sm={12} md={8}>
          <Typography>
            I am a passionate web programmer collecting more and more
            technologies that I can use for developing projects that I take part
            in. So far I was working mostly as front-end developer, but I use my
            free time to gain skills in backend as well. Meanwhile I spend time
            on my hobbies developing creative projects, my ideas as well :),
            watching football, playing guitar and when there's time travelling.
          </Typography>
          <PersonalDetails />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default About;
