import { useResetRecoilState } from 'recoil';
import styled from 'styled-components';

import { ResetButton } from 'components/atoms';
import { SideBar } from 'components/organism';

import { strategyState } from 'recoil/allocation';

function AllocSideBar() {
  const resetStrategy = useResetRecoilState(strategyState);

  return (
    <Container>
      <Wrapper>
        <ResetButton onClick={() => resetStrategy()}>설정 값 초기화</ResetButton>
      </Wrapper>
    </Container>
  );
}

export default AllocSideBar;

const Container = styled(SideBar)`
  position: sticky;
  top: 250px;
  height: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  right: -220px;
`;
