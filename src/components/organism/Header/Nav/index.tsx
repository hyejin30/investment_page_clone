import styled from 'styled-components';

import NavMenu from './NavMenu';
import WrapperLayout from 'components/organism/WrapperLayout';

import { flex, theme } from 'styles';

function Nav() {
  return (
    <Container>
      <WrapperLayout>
        <Navigation>
          <NavMenu path="/1">백테스트</NavMenu>
          <NavMenu path="/">자산배분</NavMenu>
          <NavMenu path="/3">포트폴리오 추출</NavMenu>
          <NavMenu path="/4">전략 추천</NavMenu>
          <NavMenu path="/5">커뮤니티</NavMenu>
          <NavMenu path="/6">사용권 구매</NavMenu>
        </Navigation>
      </WrapperLayout>
    </Container>
  );
}

export default Nav;

const Container = styled.nav`
  ${flex('center', '')}
  border-top: 1px solid ${theme.border.darkGray};
  border-bottom: 1px solid ${theme.border.darkGray};
`;

const Navigation = styled.ul`
  ${flex('', '')}
  column-gap: 64px;
  padding: 15px 0;
`;
