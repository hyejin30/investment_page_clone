import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

interface IButtonsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Buttons(props: IButtonsProps) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

export default Buttons;

const Container = styled.div`
  ${flex('', 'center')};
`;
