import { ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

interface ILayoutProps {
  children: ReactNode;
}

function Layout(props: ILayoutProps) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  ${flex('', '', 'column')}
  width: 100%;
  row-gap: 15px;
`;
