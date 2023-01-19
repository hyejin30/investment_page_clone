import { ChangeEvent, useState } from 'react';
// import styled from 'styled-components';

import Text from 'components/atoms/Text';
import StrategyTitle from 'components/molecule/StrategyTitle';
import Layout from 'components/organism/Layout/Layout';

function Allocation() {
  const [strategyTitle, setStrategyTitle] = useState('');

  const handleStrategyTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStrategyTitle(e.target.value);
  };

  return (
    <Layout>
      <StrategyTitle value={strategyTitle} onChange={handleStrategyTitleChange} />
      <Text.Large>자산배분 설정</Text.Large>
      <Text.Medium>자산배분 알고리즘</Text.Medium>
      <Text.Medium>주기 리밸런싱</Text.Medium>
      <Text.Medium>밴드 리밸런싱</Text.Medium>
    </Layout>
  );
}

export default Allocation;
