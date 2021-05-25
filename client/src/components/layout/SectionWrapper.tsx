import { Typography, TypographyProps } from "@material-ui/core";
import styled from "styled-components";
import { mainTheme } from "../../styled/config";

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

const SectionHeaderStyled = styled(Typography)`
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

export const SectionHeader: React.FC<TypographyProps> = ({ children }) => {
  return (
    <SectionHeaderStyled color="primary" variant="h5">
      {children}
    </SectionHeaderStyled>
  );
};
