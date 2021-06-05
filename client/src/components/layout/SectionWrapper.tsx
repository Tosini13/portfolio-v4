import { useContext } from "react";
import { Grid, TypographyProps } from "@material-ui/core";
import styled from "styled-components";
import { mainTheme, useColors } from "../../styled/config";
import { E_ROUTES } from "../../hooks/useRoutes";
import Actions, { TActionsProps } from "./Actions";
import { AuthStoreContext } from "../../stores/AuthStore";
import TypographyRC from "../../styled/typography";

export enum E_SECTION_BACKGROUND {
  "ODD" = "ODD",
  "EVEN" = "EVEN",
}

const getBackground = (background?: E_SECTION_BACKGROUND): string => {
  switch (background) {
    case E_SECTION_BACKGROUND.EVEN:
      return `background-color: ${mainTheme.palette.primary.main};`;
    case E_SECTION_BACKGROUND.ODD:
      return `background-color: ${mainTheme.palette.primary.dark};`;
    default:
      return "";
  }
};

export const SectionWrapperStyled = styled.section<{
  background?: E_SECTION_BACKGROUND;
}>`
  padding: 10px 5px 70px 5px;
  overflow: hidden;
  ${(props) => getBackground(props?.background)}
`;

export const SectionContentStyled = styled.div`
  margin: auto;
  max-width: 1400px;
`;

export const SectionWrapper: React.FC<{
  background?: E_SECTION_BACKGROUND;
  id?: E_ROUTES;
}> = ({ children, ...props }) => {
  return (
    <SectionWrapperStyled {...props}>
      <SectionContentStyled>{children}</SectionContentStyled>
    </SectionWrapperStyled>
  );
};

const SectionTitleStyled = styled(TypographyRC)`
  position: relative;
  color: black;
  width: fit-content;
  padding: 4px 10px;
  margin-bottom: 50px;
  font-weight: 600;
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 50%;
    height: 2px;
    background-color: ${mainTheme.palette.secondary.light};
  }
`;

export const SectionTitle: React.FC<TypographyProps> = ({ children }) => {
  const { titleColor } = useColors();
  return (
    <SectionTitleStyled variant="h4" style={{ color: titleColor }}>
      {children}
    </SectionTitleStyled>
  );
};

const SectionHeaderGridStyled = styled(Grid)`
  position: relative;
`;

export type TSectionHeaderProps = TActionsProps & {};

export const SectionHeader: React.FC<TSectionHeaderProps> = ({
  children,
  ...actionProps
}) => {
  const authStore = useContext(AuthStoreContext);
  return (
    <SectionHeaderGridStyled container direction="column">
      <Grid item>{children}</Grid>
      {authStore.isLoggedIn && (
        <Grid item style={{ marginBottom: "10px" }}>
          <Actions {...actionProps} />
        </Grid>
      )}
    </SectionHeaderGridStyled>
  );
};
