import { SectionHeader, SectionWrapper } from "../layout/SectionWrapper";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Home</SectionHeader>
    </SectionWrapper>
  );
};

export default Home;
