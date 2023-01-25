import { useState, ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components';

import { NumberInput, Button } from 'components/atoms';
import { Dropdown, Select, SearchBar, VirtualizedList as StockList } from 'components/molecule';

import useGetStockList from 'pages/Allocation/components/AssetList/queries/useGetStockList';

import { fillZero } from 'utils';
import { flex, theme } from 'styles';
import { IAsset } from 'types/allocation';

interface IAssetProps {
  asset: IAsset;
  index: number;
  isLastAsset: boolean;
  isOpen: boolean;
  title: string;
  onAdd: () => void;
  onDelete: () => void;
  onDropdownItemClick: (e: MouseEvent<HTMLLIElement>) => void;
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
  onDropdownItemClick,
  onRatioInputChange,
  onSelectInputClick,
}: IAssetProps) {
  const [searchValue, setSearchValue] = useState('');
  const { data: stockListData, isSuccess: getSuccess } = useGetStockList(searchValue);

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <Container>
      <AssetDropdown>
        <Dropdown.List isOpen={isOpen}>
          <SearchBar placeholder="검색어를 입력하세요." title={title} onChange={handleSearchInputChange} />
          {getSuccess ? <StockList rows={stockListData} title={title} onItemClick={onDropdownItemClick} /> : null}
        </Dropdown.List>
        <Dropdown.Trigger>
          <Select>
            <Select.Label htmlFor={title}>{`자산 ${fillZero(index)}`}</Select.Label>
            <Select.Input isSelect={isOpen} title={title} value={asset.name} onClick={onSelectInputClick} />
          </Select>
        </Dropdown.Trigger>
      </AssetDropdown>
      <NumberInput
        label="비중"
        subMessage="0 ~ 100까지 입력할 수 있습니다."
        title={`asset-${index}`}
        value={asset.ratio}
        onChange={onRatioInputChange}
      />
      <BtnList>
        {isLastAsset && <AddBtn onClick={onAdd}>추가하기</AddBtn>}
        <DeleteBtn bgColor={theme.BLACK} color={theme.WHITE} weight={400} onClick={onDelete}>
          삭제하기
        </DeleteBtn>
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
  // Dropdown.List
  ul {
    max-height: 420px;
    border: 1px solid ${theme.GRAY_LIGHT_X2};

    // SearchBar
    input {
      border: 0;
      border-bottom: 1px solid ${theme.GRAY_LIGHT_X2};
      border-radius: 5px 5px 0 0;
    }

    // Dropdown.Option
    li {
      background: ${theme.BLACK};
      border-bottom: 1px solid ${theme.GRAY_LIGHT_X2};
      border-radius: 0;

      :hover {
        background: none;
        border: 1px solid ${theme.WHITE};
      }

      :last-child {
        border-radius: 0 0 5px 5px;
      }
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
  color: ${theme.WHITE};
`;
