import { useResetRecoilState } from 'recoil';
import styled from 'styled-components';

import { ResetButton } from 'components/atoms';
import { SideBar } from 'components/organism';

import { strategyState } from 'recoil/allocation';

function AllocSideBar() {
  const resetStrategy = useResetRecoilState(strategyState);

  return (
    <Container>
      <ResetButton onClick={() => resetStrategy()}>설정 값 초기화</ResetButton>
    </Container>
  );
}

export default AllocSideBar;

const Container = styled(SideBar)`
  position: absolute;
  top: 200px;
  right: -200px;
`;
