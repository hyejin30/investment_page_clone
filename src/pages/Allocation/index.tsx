import { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';

import { Text } from 'components/atoms';
import { Dropdown, Select, StrategyTitle } from 'components/molecule';
import { Layout } from 'components/organism';

import { ALLOC_ALGORITHM_LIST, ALLOC_CYCLE_LIST } from './data';
import { flex } from 'styles';

function Allocation() {
  const [strategyTitle, setStrategyTitle] = useState('');
  const [showDropdown, setShowDropdown] = useState({
    algo: false,
    time: false,
  });

  const [data] = useState({
    algo: '전략배분 (정적자산배분)',
    time: '월별',
    band: '',
  });

  const handleStrategyTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStrategyTitle(e.target.value);
  };

  const handleSelectInputClick = (e: MouseEvent<HTMLDivElement>) => {
    const { title } = e.target as HTMLDivElement;
    setShowDropdown((prev) => ({ ...prev, [title]: !prev[title as keyof typeof showDropdown] }));
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
                <Select.Label htmlFor="algo">자산배분 알고리즘</Select.Label>
                <Select.Input name="algo" title="algo" value={data.algo} onClick={handleSelectInputClick} />
              </Select>
            </Dropdown.Trigger>
            <Dropdown.List isOpen={showDropdown.algo}>
              {ALLOC_ALGORITHM_LIST.map((item) => (
                <Dropdown.Option currentValue={data.algo} onClick={() => {}}>
                  {item}
                </Dropdown.Option>
              ))}
            </Dropdown.List>
          </Dropdown>
          <Dropdown>
            <Dropdown.Trigger>
              <Select>
                <Select.Label htmlFor="time">주기 리밸런싱</Select.Label>
                <Select.Input name="time" title="time" value={data.time} onClick={handleSelectInputClick} />
              </Select>
            </Dropdown.Trigger>
            <Dropdown.List isOpen={showDropdown.time}>
              {ALLOC_CYCLE_LIST.map((item) => (
                <Dropdown.Option currentValue={data.time} onClick={() => {}}>
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
