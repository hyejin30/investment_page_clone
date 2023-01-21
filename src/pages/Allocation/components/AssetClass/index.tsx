import { useState, MouseEvent, ChangeEvent } from 'react';
import styled from 'styled-components';

import { Button, Input, Text } from 'components/atoms';
import { Dropdown, Select } from 'components/molecule';

import { flex, theme } from 'styles';
import { IAssetClass } from 'types/allocation';

function AssetClass() {
  const [assetClassList, setAssetClassList] = useState<IAssetClass[]>([]);
  const [showDropdown, setShowDropdown] = useState<{ [key: string]: boolean }>({});

  const handleClassAddBtnClick = () => {
    const item = { name: '', ratio: 0 };
    setAssetClassList((prev) => [...prev, item]);
  };

  const handleDropdownOptionClick = (e: MouseEvent<HTMLLIElement>) => {
    const { title, innerText } = e.currentTarget;
    updateAssetClassList('name', title, innerText);
    toggleDropdown(title);
  };

  const handleSelectInputClick = (e: MouseEvent<HTMLDivElement>) => {
    const { title } = e.currentTarget;
    toggleDropdown(title);
  };

  const handleRatioInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    updateAssetClassList('ratio', title, value);
  };

  const updateAssetClassList = (key: 'name' | 'ratio', title: string, value: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/naming-convention
    const [_, idx] = title.split('-');
    const index = parseInt(idx);

    if (index === 0) {
      setAssetClassList((prev) => [
        { ...prev[index], [key]: key === 'name' ? value : parseInt(value) },
        ...prev.slice(index + 1),
      ]);
    } else {
      setAssetClassList((prev) => [
        ...prev.slice(0, index),
        { ...prev[index], [key]: key === 'name' ? value : parseInt(value) },
        ...prev.slice(index + 1),
      ]);
    }
  };

  const toggleDropdown = (title: string) => {
    setShowDropdown((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Container>
      <Text.Medium>자산군 추가</Text.Medium>
      {assetClassList?.map((assetClass, idx) => (
        <>
          <Dropdown key={`dropdown-assetClass-${idx}`}>
            <Dropdown.List isOpen={showDropdown[`assetClass-${idx}`]}>
              {['동화 약품', '경방'].map((item, optionIdx) => (
                <Dropdown.Option
                  key={`option-asset-${optionIdx}`}
                  isActive={false}
                  title={`assetClass-${idx}`}
                  onClick={handleDropdownOptionClick}
                >
                  {item}
                </Dropdown.Option>
              ))}
            </Dropdown.List>
            <Dropdown.Trigger>
              <Select>
                <Select.Label htmlFor={`assetClass-${idx}`}>{`자산 ${idx + 1}`}</Select.Label>
                <Select.Input title={`assetClass-${idx}`} value={assetClass.name} onClick={handleSelectInputClick} />
              </Select>
            </Dropdown.Trigger>
          </Dropdown>
          <Input>
            <Input.Label htmlFor={`assetClass-${idx}`}>비중</Input.Label>
            <Input.Contents>
              <Input.Value
                max={100}
                min={0}
                textAlign="center"
                title={`assetClass-${idx}`}
                type="number"
                value={assetClass.ratio}
                onChange={handleRatioInputChange}
              />
              <Input.Right>
                <Percentage>%</Percentage>
              </Input.Right>
            </Input.Contents>
            <Input.SubMessage>0 ~ 100 까지 입력할 수 있습니다.</Input.SubMessage>
          </Input>
        </>
      ))}
      <ClassAddBtn onClick={handleClassAddBtnClick}>추가하기</ClassAddBtn>
    </Container>
  );
}

export default AssetClass;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 30px;
`;

const ClassAddBtn = styled(Button)`
  width: 105px;
  padding: 12px 0px;
`;

const Percentage = styled.span`
  color: ${theme.white};
`;
