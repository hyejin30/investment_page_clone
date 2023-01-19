import styled from 'styled-components';

import Logo from 'components/atoms/Logo';
import WrapperLayout from 'components/organism/Layout/WrapperLayout';

import { flex, theme } from 'styles';

function TopHeader() {
  return (
    <Container>
      <WrapperLayout>
        <Logo path="/" />
        <button type="button">초급</button>
        <button type="button">중급</button>
        <button type="button">고급</button>
        <LoginBtn>로그인 하러가기</LoginBtn>
      </WrapperLayout>
    </Container>
  );
}

export default TopHeader;

const Container = styled.div`
  ${flex('center', '')};
  width: 100%;
`;

const LoginBtn = styled.button`
  color: ${theme.red};
`;
