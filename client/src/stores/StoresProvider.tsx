import { ProjectsStoreProvider } from "./ProjectsStore";
import { TechnologiesStoreProvider } from "./TechnologiesStore";
import { TimeStoreProvider } from "./TimeStore";

export interface StoresProviderProps {}

const StoresProvider: React.FC<StoresProviderProps> = ({ children }) => {
  return (
    <ProjectsStoreProvider>
      <TechnologiesStoreProvider>
        <TimeStoreProvider>{children}</TimeStoreProvider>
      </TechnologiesStoreProvider>
    </ProjectsStoreProvider>
  );
};

export default StoresProvider;
