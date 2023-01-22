import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { StrategyTitle } from 'components/molecule';
import { Layout } from 'components/organism';
import AllocSetting from './components/AllocSetting';
import AssetList from './components/AssetList';

import { flex, theme } from 'styles';
import { Button, Text } from 'components/atoms';

function Allocation() {
  const [strategyTitle, setStrategyTitle] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    if (title === 'strategyTitle') return setStrategyTitle(value);
  };

  const backTest = () => {};

  return (
    <Layout>
      <Container>
        <StrategyTitle title="strategyTitle" value={strategyTitle} onChange={handleInputChange} />
        <Wrapper>
          <AllocSetting />
          <AssetList />
        </Wrapper>
        <BackTestBtnWrap>
          <BackTestBtn onClick={backTest}>
            <Text.Medium color={theme.black}>백테스트</Text.Medium>
          </BackTestBtn>
        </BackTestBtnWrap>
      </Container>
    </Layout>
  );
}

export default Allocation;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 60px;
  padding-bottom: 100px;
`;

const Wrapper = styled.div`
  ${flex('', '', 'column')};
  width: 640px;
  row-gap: 60px;
`;

const BackTestBtnWrap = styled.div`
  text-align: center;
`;

const BackTestBtn = styled(Button)`
  width: 190px;
  padding: 16px 0;
  background: linear-gradient(to right, rgb(236, 97, 38), rgb(236, 38, 38));
`;
