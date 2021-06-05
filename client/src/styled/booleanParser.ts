export const parseStyledBoolean = (value: boolean): TBooleanStyled =>
  value ? value.toString() : undefined;

export type TBooleanStyled = string | undefined;
