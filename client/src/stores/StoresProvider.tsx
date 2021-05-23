import { ProjectsStoreProvider } from "./ProjectsStore";
import { TechnologiesStoreProvider } from "./TechnologiesStore";

export interface StoresProviderProps {}

const StoresProvider: React.FC<StoresProviderProps> = ({ children }) => {
  return (
    <ProjectsStoreProvider>
      <TechnologiesStoreProvider>{children}</TechnologiesStoreProvider>
    </ProjectsStoreProvider>
  );
};

export default StoresProvider;
