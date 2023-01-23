import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { Button, Text } from 'components/atoms';

import { strategyState } from 'recoil/allocation';
import { ALLOC_ALGORITHM, ALLOC_LEVEL, ALLOC_REBALANCING } from 'pages/Allocation/constant';

import { theme } from 'styles';

function BackTest() {
  const strategy = useRecoilValue(strategyState);

  const backTest = () => {
    const { algo, allocRebalancing, level, ...rest } = strategy;

    const formatted = {
      algo: ALLOC_ALGORITHM[algo],
      allocRebalancing: ALLOC_REBALANCING[allocRebalancing],
      level: ALLOC_LEVEL[level],
      ...rest,
    };

    // 백테스트 API 대신 console.log로 최종 값 확인
    console.log('백테스트', formatted);
  };

  return (
    <Container>
      <BackTestBtn onClick={backTest}>
        <Text.Medium color={theme.black}>백테스트</Text.Medium>
      </BackTestBtn>
    </Container>
  );
}

export default BackTest;

const Container = styled.div`
  text-align: center;
`;

const BackTestBtn = styled(Button)`
  width: 190px;
  padding: 16px 0;
  background: linear-gradient(to right, rgb(236, 97, 38), rgb(236, 38, 38));
`;
