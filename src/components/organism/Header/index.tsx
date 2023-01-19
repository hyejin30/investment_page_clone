import styled from 'styled-components';
import { flex } from 'styles';

import TopHeader from './TopHeader';
import Nav from './Nav';

function Header() {
  return (
    <Container>
      <TopHeader />
      <Nav />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  ${flex('', '', 'column')}
  flex: 1;
  row-gap: 30px;
`;
