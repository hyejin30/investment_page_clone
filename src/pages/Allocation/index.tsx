import { ChangeEvent, useState } from 'react';

import { Text } from 'components/atoms';
import { Select, StrategyTitle } from 'components/molecule';
import { Layout } from 'components/organism';
import styled from 'styled-components';
import { flex } from 'styles';

function Allocation() {
  const [strategyTitle, setStrategyTitle] = useState('');

  const [data] = useState({
    algo: '',
    time: '',
    band: '',
  });

  const handleStrategyTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStrategyTitle(e.target.value);
  };

  return (
    <Layout>
      <Wrapper>
        <StrategyTitle value={strategyTitle} onChange={handleStrategyTitleChange} />
        <Section>
          <Text.Medium>자산배분 설정</Text.Medium>
          <Select>
            <Select.Label htmlFor="algo">자산배분 알고리즘</Select.Label>
            <Select.Input
              name="algo"
              value={data.algo}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Select>
          <Select>
            <Select.Label htmlFor="algo">주기 리밸런싱</Select.Label>
            <Select.Input
              name="time"
              value={data.time}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Select>
          <Text.Medium>자산배분 설정</Text.Medium>
          <Select>
            <Select.Label htmlFor="algo">자산배분 알고리즘</Select.Label>
            <Select.Input
              name="algo"
              value={data.algo}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Select>
          <Select>
            <Select.Label htmlFor="algo">주기 리밸런싱</Select.Label>
            <Select.Input
              name="time"
              value={data.time}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Select>
          <Text.Medium>자산배분 설정</Text.Medium>
          <Select>
            <Select.Label htmlFor="algo">자산배분 알고리즘</Select.Label>
            <Select.Input
              name="algo"
              value={data.algo}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Select>
          <Select>
            <Select.Label htmlFor="algo">주기 리밸런싱</Select.Label>
            <Select.Input
              name="time"
              value={data.time}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Select>
          <Select>
            <Select.Label htmlFor="algo">자산배분 알고리즘</Select.Label>
            <Select.Input
              name="algo"
              value={data.algo}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Select>
          <Select>
            <Select.Label htmlFor="algo">주기 리밸런싱</Select.Label>
            <Select.Input
              name="time"
              value={data.time}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Select>
          <Select>
            <Select.Label htmlFor="algo">자산배분 알고리즘</Select.Label>
            <Select.Input
              name="algo"
              value={data.algo}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Select>
          <Select>
            <Select.Label htmlFor="algo">주기 리밸런싱</Select.Label>
            <Select.Input
              name="time"
              value={data.time}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Select>
        </Section>
      </Wrapper>
    </Layout>
  );
}

export default Allocation;

const Wrapper = styled.div`
  ${flex('', '', 'column')};
  row-gap: 60px;
`;

const Section = styled.section`
  ${flex('', '', 'column')};
  row-gap: 30px;
  width: 640px;
`;
