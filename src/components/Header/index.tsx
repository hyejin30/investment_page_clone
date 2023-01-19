import styled from 'styled-components';
import flex from 'styles/flex';
import { fitImg, theme } from 'styles';

function Header() {
  return (
    <Container>
      <StyledHeader>
        <Logo>
          <img alt="logo" src="/images/ic-logo.png" />
        </Logo>
        <button type="button">초급</button>
        <button type="button">중급</button>
        <button type="button">고급</button>
        <LoginBtn>로그인 하러가기</LoginBtn>
      </StyledHeader>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  flex: 1;
  text-align: center;
`;

const StyledHeader = styled.header`
  ${flex('space-between', 'center')};
  width: 100%;
`;

const Logo = styled.div`
  width: 156px;
  cursor: pointer;
  ${fitImg}
`;

const LoginBtn = styled.button`
  color: ${theme.red};
`;
