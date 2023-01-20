import { Text } from 'components/atoms';
import styled from 'styled-components';
import { flex } from 'styles';

function AssetClass() {
  return (
    <Container>
      <Text.Medium>자산군 추가</Text.Medium>
    </Container>
  );
}

export default AssetClass;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 30px;
`;
