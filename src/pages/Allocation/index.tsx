import styled from 'styled-components';

import { Layout, StrategyTitle } from 'components/organism';
import AllocSetting from './components/AllocSetting';
import AssetList from './components/AssetList';
import AllocDateSelect from './components/AllocDateSelect';
import BackTest from './components/BackTest';

import { flex } from 'styles';

function Allocation() {
  return (
    <Layout>
      <Container>
        <StrategyTitle />
        <Wrapper>
          <AllocSetting />
          <AssetList />
          <AllocDateSelect />
        </Wrapper>
        <BackTest />
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
