import { ChangeEvent, MouseEvent, useState } from 'react';

import { Text } from 'components/atoms';
import { Dropdown, Select, StrategyTitle } from 'components/molecule';
import { Layout } from 'components/organism';
import styled from 'styled-components';
import { flex } from 'styles';

function Allocation() {
  const [strategyTitle, setStrategyTitle] = useState('');
  const [showDropdown, setShowDropdown] = useState({
    algo: false,
    time: false,
  });

  const [data] = useState({
    algo: '',
    time: '',
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
          <Dropdown.Trigger>
            <Select>
              <Select.Label htmlFor="algo">자산배분 알고리즘</Select.Label>
              <Select.Input name="algo" title="algo" value={data.algo} onClick={handleSelectInputClick} />
            </Select>
          </Dropdown.Trigger>
          <Dropdown isOpen>
            {['자산1', '자산2'].map((item) => (
              <Dropdown.Option>{item}</Dropdown.Option>
            ))}
          </Dropdown>
          <Dropdown.Trigger>
            <Select>
              <Select.Label htmlFor="time">주기 리밸런싱</Select.Label>
              <Select.Input name="time" title="time" value={data.time} onClick={handleSelectInputClick} />
            </Select>
          </Dropdown.Trigger>
          <Dropdown isOpen={showDropdown.time}>
            {['자산1', '자산2'].map((item) => (
              <Dropdown.Option>{item}</Dropdown.Option>
            ))}
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
