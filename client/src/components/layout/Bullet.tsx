import { TypographyProps } from "@material-ui/core";
import styled from "styled-components";
import { mainTheme } from "../../styled/config";
import TypographyRC from "../../styled/typography";

export const BulletStyled = styled.div<{
  isselectable: boolean;
}>`
  position: absolute;
  left: 2px;
  border: ${mainTheme.palette.secondary.light} solid 1px;
  border-radius: 50%;
  height: 13px;
  width: 13px;
  background-color: white;
  margin-top: 4px;
  transition: all 0.3s;
  ${(props) =>
    props.isselectable
      ? `
        box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
        border-color: rgba(0,0,0,0.8);
        background-color: rgba(0,0,0,0.8);
        cursor: pointer;
        &:hover{
          background-color: ${mainTheme.palette.secondary.light};
        }
        `
      : ""}
`;

export const TypographyStyled = styled(TypographyRC)`
  font-weight: bold;
  margin-left: 5px;
  color: ${mainTheme.palette.secondary.light};
`;

export interface BulletProps {
  isSelectable?: boolean;
  handleClick?: () => void;
}

export const Bullet: React.FC<BulletProps> = ({
  children,
  isSelectable,
  handleClick,
}) => {
  return (
    <>
      <BulletStyled
        isselectable={Boolean(isSelectable)}
        onClick={handleClick}
      />
      <TypographyStyled>{children}</TypographyStyled>
    </>
  );
};

/* ******************************************* */
/* ***************** TYPOGRAPHY ************** */
/* ******************************************* */

export const InstitutionTypographyStyled = styled(TypographyRC)`
  font-weight: bold;
  margin-left: 5px;
  margin-top: 5px;
`;

export const InstitutionTypography: React.FC<TypographyProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <InstitutionTypographyStyled {...props}>
        {children}
      </InstitutionTypographyStyled>
    </>
  );
};
