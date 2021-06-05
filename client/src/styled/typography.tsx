import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { useColors } from "./config";

const SubTitleTypographyStyled = styled(Typography)`
  margin-bottom: 15px;
  font-weight: 600;
`;

export interface SubTitleTypographyProps {}

const SubTitleTypography: React.FC<SubTitleTypographyProps> = ({
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

export default SubTitleTypography;
