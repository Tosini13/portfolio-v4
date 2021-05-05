import { Typography } from "@material-ui/core";
import {
  E_SECTION_BACKGROUND,
  SectionHeader,
  SectionWrapper,
} from "../layout/SectionWrapper";
import PersonalDetails from "./PersonalDetails";

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <SectionWrapper background={E_SECTION_BACKGROUND.EVEN}>
      <SectionHeader>About</SectionHeader>
      <Typography>
        I am a passionate web programmer collecting more and more technologies
        that I can use for developing projects that I take part in. So far I was
        working mostly as front-end developer, but I use my free time to gain
        skills in backend as well. Meanwhile I spend time on my hobbies
        developing creative projects, my ideas as well :), watching football,
        playing guitar and when there's time travelling.
      </Typography>
      <PersonalDetails />
    </SectionWrapper>
  );
};

export default About;
