import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Text from 'components/atoms/Text';
import Logo from 'components/atoms/Logo';
import WrapperLayout from 'components/organism/Layout/WrapperLayout';

import { flex, theme } from 'styles';

function TopMenu() {
  return (
    <Container>
      <WrapperLayout>
        <Logo path="/" />
        <button type="button">초급</button>
        <button type="button">중급</button>
        <button type="button">고급</button>
        <Link to="/">
          <Text.Regular color={theme.red} weight={700}>
            로그인 하러가기
          </Text.Regular>
        </Link>
      </WrapperLayout>
    </Container>
  );
}

export default TopMenu;

const Container = styled.div`
  ${flex('center', '')};
  width: 100%;
  padding: 30px 0 20px;
`;
