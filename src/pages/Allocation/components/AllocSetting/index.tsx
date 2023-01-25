import { ChangeEvent, MouseEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { NumberInput, Text } from 'components/atoms';
import { Dropdown, Select } from 'components/molecule';

import { strategyState } from 'recoil/allocation';
import { ALLOC_ALGORITHM_LIST, ALLOC_REBALANCING_LIST } from 'pages/Allocation/constant';

import { ensureInRange } from 'utils';
import { flex } from 'styles';

function AllocSetting() {
  const [showAlgoDropdown, setShowAlgoDropdown] = useState(false);
  const [showAllocRebalancingDropdown, setShowAllocRebalancingDropdown] = useState(false);

  const [strategy, setStrategy] = useRecoilState(strategyState);
  const { algo, allocRebalancing, band } = strategy;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    if (title === 'band') return setStrategy((prev) => ({ ...prev, [title]: ensureInRange(value, 0, 100) }));
  };

  const handleSelectInputClick = (e: MouseEvent<HTMLDivElement>) => {
    const { title } = e.currentTarget;
    toggleDropdown(title);
  };

  const handleDropdownOptionClick = (e: MouseEvent<HTMLLIElement>) => {
    const { title, innerText } = e.currentTarget;
    setStrategy((prev) => ({ ...prev, [title]: innerText }));
    toggleDropdown(title);
  };

  const toggleDropdown = (title: string) => {
    if (title === 'algo') return setShowAlgoDropdown((prev) => !prev);
    if (title === 'allocRebalancing') return setShowAllocRebalancingDropdown((prev) => !prev);
  };

  return (
    <Container>
      <Text.Medium>자산배분 설정</Text.Medium>
      <Dropdown>
        <Dropdown.Trigger>
          <Select>
            <Select.Label htmlFor="algo">자산배분 알고리즘</Select.Label>
            <Select.Input isSelect={showAlgoDropdown} title="algo" value={algo} onClick={handleSelectInputClick} />
          </Select>
        </Dropdown.Trigger>
        <Dropdown.List isOpen={showAlgoDropdown}>
          {ALLOC_ALGORITHM_LIST.map((item, idx) => (
            <Dropdown.Item
              key={`option-algo-${idx}`}
              isActive={algo === item}
              title="algo"
              onClick={handleDropdownOptionClick}
            >
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
      <Dropdown>
        <Dropdown.Trigger>
          <Select>
            <Select.Label htmlFor="allocRebalancing">주기 리밸런싱</Select.Label>
            <Select.Input
              isSelect={showAllocRebalancingDropdown}
              title="allocRebalancing"
              value={allocRebalancing || '주기 리밸런싱을 선택해주세요.'}
              onClick={handleSelectInputClick}
            />
          </Select>
        </Dropdown.Trigger>
        <Dropdown.List isOpen={showAllocRebalancingDropdown}>
          {ALLOC_REBALANCING_LIST.map((item, idx) => (
            <Dropdown.Item
              key={`option-allocRebalancing-${idx}`}
              isActive={allocRebalancing === item}
              title="allocRebalancing"
              onClick={handleDropdownOptionClick}
            >
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
      <NumberInput
        label="밴드 리밸런싱"
        subMessage="0 ~ 100까지 입력할 수 있습니다. (0 입력시 비활성화)"
        title="band"
        value={band}
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
