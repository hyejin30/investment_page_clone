import styled from 'styled-components';
import { flex } from 'styles';

import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

function Header() {
  return (
    <Container>
      <MainHeader />
      <SubHeader />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  ${flex('', '', 'column')}
  flex: 1;
  row-gap: 30px;
`;
