import { Typography } from "@material-ui/core";
import styled from "styled-components";

const SubTitleTypographyStyled = styled(Typography)`
  margin-bottom: 15px;
  font-weight: 600;
`;

export interface SubTitleTypographyProps {}

const SubTitleTypography: React.FC<SubTitleTypographyProps> = ({
  children,
}) => {
  return (
    <SubTitleTypographyStyled variant="h5" align="left" color="secondary">
      {children}
    </SubTitleTypographyStyled>
  );
};

export default SubTitleTypography;
