import styled from 'styled-components';

import { Layout } from 'components/organism';
import { AllocDateSelect, AllocSetting, AllocSideBar, AllocStrategyName, AssetList, BackTest } from './components';

import { flex } from 'styles';

function Allocation() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <AllocStrategyName />
          <Contents>
            <AllocSetting />
            <AssetList />
            <AllocDateSelect />
          </Contents>
          <BackTest />
        </Wrapper>
        <AllocSideBar />
      </Container>
    </Layout>
  );
}

export default Allocation;

const Container = styled.div`
  ${flex('', '')};
  width: 100%;
`;

const Wrapper = styled.div`
  ${flex('', '', 'column')};
  width: 100%;
  row-gap: 60px;
  padding-bottom: 100px;
`;

const Contents = styled.div`
  ${flex('', '', 'column')};
  width: 640px;
  row-gap: 60px;
`;
