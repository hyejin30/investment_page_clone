import styled from 'styled-components';

import { Layout } from 'components/organism';
import { AllocDateSelect, AllocSetting, AllocSideBar, AllocStrategyName, AssetList, BackTest } from './components';

import { flex } from 'styles';

function Allocation() {
  return (
    <Layout>
      <Container>
        <AllocStrategyName />
        <Wrapper>
          <AllocSetting />
          <AssetList />
          <AllocDateSelect />
        </Wrapper>
        <BackTest />
        <AllocSideBar />
      </Container>
    </Layout>
  );
}

export default Allocation;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 60px;
  padding-bottom: 100px;
  position: relative;
`;

const Wrapper = styled.div`
  ${flex('', '', 'column')};
  width: 640px;
  row-gap: 60px;
`;
