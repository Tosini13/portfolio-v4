import { AuthStoreProvider } from "./AuthStore";
import { ProjectsStoreProvider } from "./ProjectsStore";
import { TechnologiesStoreProvider } from "./TechnologiesStore";
import { TimeStoreProvider } from "./TimeStore";

export interface StoresProviderProps {}

const StoresProvider: React.FC<StoresProviderProps> = ({ children }) => {
  return (
    <AuthStoreProvider>
      <ProjectsStoreProvider>
        <TechnologiesStoreProvider>
          <TimeStoreProvider>{children}</TimeStoreProvider>
        </TechnologiesStoreProvider>
      </ProjectsStoreProvider>
    </AuthStoreProvider>
  );
};

export default StoresProvider;
