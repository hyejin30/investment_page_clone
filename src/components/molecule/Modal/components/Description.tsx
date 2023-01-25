import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { flex, theme } from 'styles';

interface IDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Description(props: IDescriptionProps) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

export default Description;

const Container = styled.div`
  ${flex('', 'center', 'column')};
  min-width: 420px;
  padding: 30px;
  border-bottom: 1px solid ${theme.BLACK};
`;
