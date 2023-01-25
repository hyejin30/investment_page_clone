import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import Text from 'components/atoms/Text';
import Logo from 'components/atoms/Logo';
import WrapperLayout from 'components/organism/Layout/WrapperLayout';
import { Tabs } from 'components/molecule';

import { strategyState } from 'recoil/allocation';
import { flex, theme } from 'styles';

function TopMenu() {
  const setStrategy = useSetRecoilState(strategyState);

  const handleTabClick = (level: '초급' | '중급' | '고급') => {
    setStrategy((prev) => ({ ...prev, level }));
  };

  return (
    <Container>
      <WrapperLayout>
        <Logo path="/" />
        <UserMenu>
          <Tabs>
            <Tab onClick={() => handleTabClick('초급')}>초급</Tab>
            <Tab onClick={() => handleTabClick('중급')}>중급</Tab>
            <Tab onClick={() => handleTabClick('고급')}>고급</Tab>
          </Tabs>
          <Link to="/">
            <Text.Regular color={theme.RED} weight={700}>
              로그인 하러가기
            </Text.Regular>
          </Link>
        </UserMenu>
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

const UserMenu = styled.div`
  ${flex('', 'center')};
  column-gap: 30px;
`;

const Tab = styled.div`
  padding: 5px 20px;
`;
