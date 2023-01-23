import { useState, MouseEvent, ChangeEvent } from 'react';
import styled from 'styled-components';

import { Button, Text } from 'components/atoms';
import Asset from './components/Asset';

import { flex } from 'styles';
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

  const handleDropdownItemClick = (e: MouseEvent<HTMLLIElement>) => {
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
    const index = parseInt(title.split('-')[1]);

    if (index === 0) return setAssetList((prev) => [{ ...prev[index], [key]: value }, ...prev.slice(index + 1)]);
    setAssetList((prev) => [...prev.slice(0, index), { ...prev[index], [key]: value }, ...prev.slice(index + 1)]);
  };

  const toggleDropdown = (title: string) => {
    setShowDropdown((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Container>
      <Text.Medium>자산군 추가</Text.Medium>
      {assetList?.map((asset, index) => (
        <Asset
          key={`asset-${index}`}
          asset={asset}
          index={index}
          isLastAsset={assetList.length - 1 === index}
          isOpen={showDropdown[`asset-${index}`]}
          title={`asset-${index}`}
          onAdd={addAsset}
          onDelete={() => deleteAsset(index)}
          onDropdownItemClick={handleDropdownItemClick}
          onRatioInputChange={handleRatioInputChange}
          onSelectInputClick={handleSelectInputClick}
        />
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

const AddBtn = styled(Button)`
  width: 105px;
  padding: 12px 0px;
`;
