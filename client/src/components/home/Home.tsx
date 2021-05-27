import { SectionTitle, SectionWrapper } from "../layout/SectionWrapper";
import { E_ROUTES } from "../menu/useRoutes";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <SectionWrapper id={E_ROUTES.home}>
      <SectionTitle>Home</SectionTitle>
    </SectionWrapper>
  );
};

export default Home;
