import { ReactNode } from 'react';
import styled from 'styled-components';

import Footer from 'components/organism/Footer';
import Header from 'components/organism/Header';
import { flex, theme } from 'styles';

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  ${flex('center', 'center', 'column')}
  width: 100vw;
  height: 100vh;
  background: ${theme.black};
`;

const Body = styled.main`
  width: 1020px;
  padding: 40px 0;
`;
