import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { StrategyTitle } from 'components/molecule';
import { Layout } from 'components/organism';

import { flex } from 'styles';
import AllocSetting from './components/AllocSetting';

function Allocation() {
  const [strategyTitle, setStrategyTitle] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    if (title === 'strategyTitle') return setStrategyTitle(value);
  };

  return (
    <Layout>
      <Wrapper>
        <StrategyTitle title="strategyTitle" value={strategyTitle} onChange={handleInputChange} />
        <AllocSetting />
      </Wrapper>
    </Layout>
  );
}

export default Allocation;

const Wrapper = styled.div`
  ${flex('', '', 'column')};
  row-gap: 60px;
`;
