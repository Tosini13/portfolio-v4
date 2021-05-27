import { Grid, Typography, TypographyProps } from "@material-ui/core";
import styled from "styled-components";
import { mainTheme } from "../../styled/config";
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

export const SectionWrapper = styled.section<{
  background?: E_SECTION_BACKGROUND;
}>`
  padding: 10px 5px;
  overflow: hidden;
  min-height: 100vh;
  ${(props) => getBackground(props?.background)}
`;

const SectionTitleStyled = styled(Typography)`
  position: relative;
  color: black;
  width: fit-content;
  padding: 4px 10px;
  margin-bottom: 15px;
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
    <SectionTitleStyled color="primary" variant="h5">
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
    <SectionHeaderGridStyled container alignItems="center" spacing={2}>
      <Grid item>{children}</Grid>
      {isInAction && (
        <Grid item>
          <Actions {...actionProps} />
        </Grid>
      )}
    </SectionHeaderGridStyled>
  );
};
