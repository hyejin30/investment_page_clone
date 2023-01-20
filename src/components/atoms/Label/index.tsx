import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { fontSize, theme } from 'styles';

interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor: string;
}

function Label(props: ILabelProps) {
  const { children, ...restProps } = props;
  return <StyledLabel {...restProps}>{children}</StyledLabel>;
}

export default Label;

const StyledLabel = styled.label`
  font-size: ${fontSize.regular};
  color: ${theme.white};
`;
