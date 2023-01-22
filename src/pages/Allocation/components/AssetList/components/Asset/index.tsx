import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import { NumberInput, Button } from 'components/atoms';
import { Dropdown, Select, SearchBar } from 'components/molecule';

import fillZero from 'utils/fillZero';
import { STOCK_LIST } from './data';

import { flex, theme } from 'styles';
import { IAsset, IStock } from 'types/allocation';

interface IAssetProps {
  asset: IAsset;
  index: number;
  isLastAsset: boolean;
  isOpen: boolean;
  title: string;
  onAdd: () => void;
  onDelete: () => void;
  onDropdownOptionClick: (e: MouseEvent<HTMLLIElement>) => void;
  onRatioInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelectInputClick: (e: MouseEvent<HTMLDivElement>) => void;
}

function Asset({
  asset,
  index,
  isLastAsset,
  isOpen,
  title,
  onAdd,
  onDelete,
  onDropdownOptionClick,
  onRatioInputChange,
  onSelectInputClick,
}: IAssetProps) {
  const [searchValue, setSearchValue] = useState('');
  const [stockList, setStockList] = useState<IStock[]>(STOCK_LIST);

  const search = (data: IStock[], value: string) => data.filter((item) => item.label.includes(value));

  useEffect(() => {
    if (!searchValue) return setStockList(STOCK_LIST);
    setStockList(search(STOCK_LIST, searchValue));
  }, [searchValue]);

  return (
    <Container>
      <AssetDropdown>
        <Dropdown.List isOpen={isOpen}>
          <SearchBar
            placeholder="검색어를 입력하세요."
            title={title}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {stockList.map((stock, optionIdx) => (
            <Dropdown.Option key={`asset-dropdown-option-${optionIdx}`} title={title} onClick={onDropdownOptionClick}>
              {stock.label}
            </Dropdown.Option>
          ))}
        </Dropdown.List>
        <Dropdown.Trigger>
          <Select>
            <Select.Label htmlFor={title}>{`자산 ${fillZero(index)}`}</Select.Label>
            <Select.Input title={title} value={asset.name} onClick={onSelectInputClick} />
          </Select>
        </Dropdown.Trigger>
      </AssetDropdown>
      <NumberInput
        label="비중"
        max="100"
        min="0"
        subMessage="0 ~ 100까지 입력할 수 있습니다."
        title={`asset-${index}`}
        value={asset.ratio}
        onChange={onRatioInputChange}
      />
      <BtnList>
        {isLastAsset && <AddBtn onClick={onAdd}>추가하기</AddBtn>}
        <DeleteBtn onClick={onDelete}>삭제하기</DeleteBtn>
      </BtnList>
    </Container>
  );
}

export default Asset;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 30px;
`;

const AssetDropdown = styled(Dropdown)`
  li {
    border: 1px solid ${theme.border.lightGray};
    border-radius: 0;

    :hover {
      background: none;
      border: 1px solid ${theme.white};
    }
  }
`;

const BtnList = styled.div`
  ${flex('', '')};
  column-gap: 20px;
`;

const BaseBtn = styled(Button)`
  width: 105px;
  padding: 12px 0px;
`;

const AddBtn = styled(BaseBtn)``;

const DeleteBtn = styled(BaseBtn)`
  background: #000000;
  color: ${theme.white};
`;
