import { Grid, Typography, TypographyProps } from "@material-ui/core";
import styled from "styled-components";
import { mainTheme } from "../../styled/config";
import { E_ROUTES } from "../../hooks/useRoutes";
import Actions, { TActionsProps } from "./Actions";

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
  padding: 10px 5px;
  overflow: hidden;
  min-height: 100vh;
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

const SectionTitleStyled = styled(Typography)`
  position: relative;
  color: black;
  width: fit-content;
  padding: 4px 10px;
  margin-bottom: 15px;
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
  return (
    <SectionTitleStyled color="primary" variant="h4">
      {children}
    </SectionTitleStyled>
  );
};

const SectionHeaderGridStyled = styled(Grid)`
  position: relative;
`;

export type TSectionHeaderProps = TActionsProps & {
  isInAction: boolean;
};

export const SectionHeader: React.FC<TSectionHeaderProps> = ({
  children,
  isInAction,
  ...actionProps
}) => {
  return (
    <SectionHeaderGridStyled container direction="column">
      <Grid item>{children}</Grid>
      {isInAction && (
        <Grid item style={{ marginBottom: "10px" }}>
          <Actions {...actionProps} />
        </Grid>
      )}
    </SectionHeaderGridStyled>
  );
};
