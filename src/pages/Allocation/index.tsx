import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { StrategyTitle } from 'components/molecule';
import { Layout } from 'components/organism';
import AllocSetting from './components/AllocSetting';
import AssetClassList from './components/AssetClassList';

import { flex } from 'styles';

function Allocation() {
  const [strategyTitle, setStrategyTitle] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    if (title === 'strategyTitle') return setStrategyTitle(value);
  };

  return (
    <Layout>
      <Container>
        <StrategyTitle title="strategyTitle" value={strategyTitle} onChange={handleInputChange} />
        <Wrapper>
          <AllocSetting />
          <AssetClassList />
        </Wrapper>
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
