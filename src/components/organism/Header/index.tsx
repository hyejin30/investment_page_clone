import styled from 'styled-components';
import { flex } from 'styles';

import TopMenu from './TopMenu';
import Nav from './Nav';

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
  width: 100%;
  row-gap: 30px;
`;
