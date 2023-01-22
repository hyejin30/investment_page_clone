import { useState, MouseEvent, ChangeEvent } from 'react';
import styled from 'styled-components';

import { Button, Text, NumberInput } from 'components/atoms';
import { Dropdown, Select } from 'components/molecule';

import fillZero from 'utils/fillZero';
import { STOCK_LIST } from './data';

import { flex, theme } from 'styles';
import { IAsset } from 'types/allocation';

function AssetList() {
  const [assetList, setAssetList] = useState<IAsset[]>([]);
  const [showDropdown, setShowDropdown] = useState<{ [key: string]: boolean }>({});

  const addAsset = () => {
    const item = { name: '', ratio: '' };
    setAssetList((prev) => [...prev, item]);
  };

  const deleteAsset = (deleteIdx: number) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    setAssetList((prev) => prev.filter((_, idx) => idx !== deleteIdx));
  };

  const handleDropdownOptionClick = (e: MouseEvent<HTMLLIElement>) => {
    const { title, innerText } = e.currentTarget;
    updateAsset('name', title, innerText);
    toggleDropdown(title);
  };

  const handleSelectInputClick = (e: MouseEvent<HTMLDivElement>) => {
    const { title } = e.currentTarget;
    toggleDropdown(title);
  };

  const handleRatioInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    updateAsset('ratio', title, value);
  };

  const updateAsset = (key: 'name' | 'ratio', title: string, value: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/naming-convention
    const [_, idx] = title.split('-');
    const index = parseInt(idx);

    if (index === 0) return setAssetList((prev) => [{ ...prev[index], [key]: value }, ...prev.slice(index + 1)]);
    setAssetList((prev) => [...prev.slice(0, index), { ...prev[index], [key]: value }, ...prev.slice(index + 1)]);
  };

  const toggleDropdown = (title: string) => {
    setShowDropdown((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Container>
      <Text.Medium>자산군 추가</Text.Medium>
      {assetList?.map((asset, idx) => (
        <Asset key={`asset-dropdown-${idx}`}>
          <Dropdown>
            <Dropdown.List isOpen={showDropdown[`asset-${idx}`]}>
              {STOCK_LIST.map((item, optionIdx) => (
                <Dropdown.Option
                  key={`asset-dropdown-option-${optionIdx}`}
                  isActive={item.label === asset.name}
                  title={`asset-${idx}`}
                  onClick={handleDropdownOptionClick}
                >
                  {item.label}
                </Dropdown.Option>
              ))}
            </Dropdown.List>
            <Dropdown.Trigger>
              <Select>
                <Select.Label htmlFor={`asset-${idx}`}>{`자산 ${fillZero(idx)}`}</Select.Label>
                <Select.Input title={`asset-${idx}`} value={asset.name} onClick={handleSelectInputClick} />
              </Select>
            </Dropdown.Trigger>
          </Dropdown>
          <NumberInput
            label="비중"
            max="100"
            min="0"
            subMessage="0 ~ 100까지 입력할 수 있습니다."
            title={`asset-${idx}`}
            value={asset.ratio}
            onChange={handleRatioInputChange}
          />
          <BtnList>
            {assetList.length - 1 === idx && <AddBtn onClick={addAsset}>추가하기</AddBtn>}
            <DeleteBtn onClick={() => deleteAsset(idx)}>삭제하기</DeleteBtn>
          </BtnList>
        </Asset>
      ))}
      {assetList?.length === 0 && <AddBtn onClick={addAsset}>추가하기</AddBtn>}
    </Container>
  );
}

export default AssetList;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 30px;
`;

const Asset = styled.div`
  ${flex('', '', 'column')};
  row-gap: 30px;
`;

const BaseBtn = styled(Button)`
  width: 105px;
  padding: 12px 0px;
`;

const BtnList = styled.div`
  ${flex('', '')};
  column-gap: 20px;
`;

const AddBtn = styled(BaseBtn)``;

const DeleteBtn = styled(BaseBtn)`
  background: #000000;
  color: ${theme.white};
`;
