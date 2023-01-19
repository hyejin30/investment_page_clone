import styled from 'styled-components';

import Menu from './Menu';

import { flex } from 'styles';

function SubHeader() {
  return (
    <MenuList>
      <Menu path="/1">백테스트</Menu>
      <Menu path="/">자산배분</Menu>
      <Menu path="/3">포트폴리오 추출</Menu>
      <Menu path="/4">전략 추천</Menu>
      <Menu path="/5">커뮤니티</Menu>
      <Menu path="/6">사용권 구매</Menu>
    </MenuList>
  );
}

export default SubHeader;

const MenuList = styled.div`
  ${flex('', 'center')}
  column-gap: 64px;
`;
