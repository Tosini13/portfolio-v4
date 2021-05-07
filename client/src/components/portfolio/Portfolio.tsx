import { Grid } from "@material-ui/core";
import { SectionHeader, SectionWrapper } from "../layout/SectionWrapper";

export interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Portfolio</SectionHeader>
      <Grid container>Content</Grid>
    </SectionWrapper>
  );
};

export default Portfolio;
