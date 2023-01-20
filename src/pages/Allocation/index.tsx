import { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';

import { Text } from 'components/atoms';
import { Dropdown, Select, StrategyTitle } from 'components/molecule';
import { Layout } from 'components/organism';

import { ALLOC_ALGORITHM_LIST, ALLOC_CYCLE_LIST } from './data';
import { flex } from 'styles';

function Allocation() {
  const [strategyTitle, setStrategyTitle] = useState('');
  const [showAlgorithmDropdown, setShowAlgorithmDropdown] = useState(false);
  const [showCycleDropdown, setShowCycleDropdown] = useState(false);

  const [data] = useState({
    algo: '전략배분 (정적자산배분)',
    time: '월별',
    band: '',
  });

  const handleStrategyTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStrategyTitle(e.target.value);
  };

  const handleSelectInputClick = (e: MouseEvent<HTMLDivElement>) => {
    const { title } = e.currentTarget;
    if (title === 'algorithm') return setShowAlgorithmDropdown((prev) => !prev);
    if (title === 'cycle') return setShowCycleDropdown((prev) => !prev);
  };

  return (
    <Layout>
      <Wrapper>
        <StrategyTitle value={strategyTitle} onChange={handleStrategyTitleChange} />
        <Section>
          <Text.Medium>자산배분 설정</Text.Medium>
          <Dropdown>
            <Dropdown.Trigger>
              <Select>
                <Select.Label htmlFor="algorithm">자산배분 알고리즘</Select.Label>
                <Select.Input title="algorithm" value={data.algo} onClick={handleSelectInputClick} />
              </Select>
            </Dropdown.Trigger>
            <Dropdown.List isOpen={showAlgorithmDropdown}>
              {ALLOC_ALGORITHM_LIST.map((item, idx) => (
                <Dropdown.Option key={`option-algorithm-${idx}`} isActive={data.algo === item} onClick={() => {}}>
                  {item}
                </Dropdown.Option>
              ))}
            </Dropdown.List>
          </Dropdown>
          <Dropdown>
            <Dropdown.Trigger>
              <Select>
                <Select.Label htmlFor="cycle">주기 리밸런싱</Select.Label>
                <Select.Input title="cycle" value={data.time} onClick={handleSelectInputClick} />
              </Select>
            </Dropdown.Trigger>
            <Dropdown.List isOpen={showCycleDropdown}>
              {ALLOC_CYCLE_LIST.map((item, idx) => (
                <Dropdown.Option key={`option-cycle-${idx}`} isActive={data.time === item} onClick={() => {}}>
                  {item}
                </Dropdown.Option>
              ))}
            </Dropdown.List>
          </Dropdown>
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
