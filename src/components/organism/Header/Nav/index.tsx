import styled from 'styled-components';

import NavMenu from './NavMenu';

import { flex } from 'styles';

function Nav() {
  return (
    <Navigation>
      <NavMenu path="/1">백테스트</NavMenu>
      <NavMenu path="/">자산배분</NavMenu>
      <NavMenu path="/3">포트폴리오 추출</NavMenu>
      <NavMenu path="/4">전략 추천</NavMenu>
      <NavMenu path="/5">커뮤니티</NavMenu>
      <NavMenu path="/6">사용권 구매</NavMenu>
    </Navigation>
  );
}

export default Nav;

const Navigation = styled.nav`
  ${flex('', 'center')}
  column-gap: 64px;
`;
