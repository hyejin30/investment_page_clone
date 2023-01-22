import { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';

import { NumberInput, Text } from 'components/atoms';
import { Dropdown, Select } from 'components/molecule';

import { ALLOC_ALGORITHM_LIST, ALLOC_CYCLE_LIST } from './data';
import { flex } from 'styles';

function AllocSetting() {
  const [showAlgorithmDropdown, setShowAlgorithmDropdown] = useState(false);
  const [showCycleDropdown, setShowCycleDropdown] = useState(false);

  const [data, setData] = useState({
    algorithm: '전략배분 (정적자산배분)',
    cycle: '월별',
    band: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    if (title === 'band') return setData((prev) => ({ ...prev, [title]: value }));
  };

  const handleSelectInputClick = (e: MouseEvent<HTMLDivElement>) => {
    const { title } = e.currentTarget;
    toggleDropdown(title);
  };

  const handleDropdownOptionClick = (e: MouseEvent<HTMLLIElement>) => {
    const { title, innerText } = e.currentTarget;
    setData((prev) => ({ ...prev, [title]: innerText }));
    toggleDropdown(title);
  };

  const toggleDropdown = (title: string) => {
    if (title === 'algorithm') return setShowAlgorithmDropdown((prev) => !prev);
    if (title === 'cycle') return setShowCycleDropdown((prev) => !prev);
  };

  return (
    <Container>
      <Text.Medium>자산배분 설정</Text.Medium>
      <Dropdown>
        <Dropdown.Trigger>
          <Select>
            <Select.Label htmlFor="algorithm">자산배분 알고리즘</Select.Label>
            <Select.Input title="algorithm" value={data.algorithm} onClick={handleSelectInputClick} />
          </Select>
        </Dropdown.Trigger>
        <Dropdown.List isOpen={showAlgorithmDropdown}>
          {ALLOC_ALGORITHM_LIST.map((item, idx) => (
            <Dropdown.Option
              key={`option-algorithm-${idx}`}
              isActive={data.algorithm === item}
              title="algorithm"
              onClick={handleDropdownOptionClick}
            >
              {item}
            </Dropdown.Option>
          ))}
        </Dropdown.List>
      </Dropdown>
      <Dropdown>
        <Dropdown.Trigger>
          <Select>
            <Select.Label htmlFor="cycle">주기 리밸런싱</Select.Label>
            <Select.Input title="cycle" value={data.cycle} onClick={handleSelectInputClick} />
          </Select>
        </Dropdown.Trigger>
        <Dropdown.List isOpen={showCycleDropdown}>
          {ALLOC_CYCLE_LIST.map((item, idx) => (
            <Dropdown.Option
              key={`option-cycle-${idx}`}
              isActive={data.cycle === item}
              title="cycle"
              onClick={handleDropdownOptionClick}
            >
              {item}
            </Dropdown.Option>
          ))}
        </Dropdown.List>
      </Dropdown>
      <NumberInput
        label="밴드 리밸런싱"
        max="100"
        min="0"
        subMessage="0 ~ 100까지 입력할 수 있습니다. (0 입력시 비활성화)"
        title="band"
        value={data.band}
        onChange={handleInputChange}
      />
    </Container>
  );
}

export default AllocSetting;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 30px;
`;
