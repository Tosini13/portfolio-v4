import { Grid } from "@material-ui/core";
import { SectionHeader, SectionWrapper } from "../layout/SectionWrapper";
import { E_ROUTES } from "../menu/useRoutes";

export interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <SectionWrapper id={E_ROUTES.portfolio}>
      <SectionHeader>Portfolio</SectionHeader>
      <Grid container>Content</Grid>
    </SectionWrapper>
  );
};

export default Portfolio;
