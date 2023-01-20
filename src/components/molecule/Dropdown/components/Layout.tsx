import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return <Container>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  ${flex('', '', 'column')}
  position: relative;
`;
