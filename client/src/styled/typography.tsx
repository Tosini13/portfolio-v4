import { Typography, TypographyProps } from "@material-ui/core";
import styled from "styled-components";
import { useColors } from "./config";

const TypographyRCStyled = styled(Typography)``;

const TypographyRC: React.FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <TypographyRCStyled color="textPrimary" {...props}>
      {children}
    </TypographyRCStyled>
  );
};
export default TypographyRC;

const SubTitleTypographyStyled = styled(TypographyRC)`
  margin-bottom: 15px;
  font-weight: 600;
`;

export interface SubTitleTypographyProps {}

export const SubTitleTypography: React.FC<SubTitleTypographyProps> = ({
  children,
}) => {
  const { titleColor } = useColors();
  return (
    <SubTitleTypographyStyled
      variant="h5"
      align="left"
      style={{ color: titleColor }}
    >
      {children}
    </SubTitleTypographyStyled>
  );
};
