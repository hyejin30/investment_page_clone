import styled from 'styled-components';

import TopMenu from './TopMenu';
import Nav from './Nav';

import { flex, theme, Z_INDEX } from 'styles';

function Header() {
  return (
    <Container>
      <TopMenu />
      <Nav />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  ${flex('', '', 'column')}
  position: sticky;
  top: 0px;
  background: ${theme.black};
  z-index: ${Z_INDEX.header};
`;
