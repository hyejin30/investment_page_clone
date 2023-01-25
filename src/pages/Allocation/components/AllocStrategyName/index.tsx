import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { Text } from 'components/atoms';
import { Modal } from 'components/molecule';
import { StrategyName } from 'components/organism';

import { assetListState, strategyState } from 'recoil/allocation';
import { ALLOC_ALGORITHM, ALLOC_REBALANCING, ALLOC_LEVEL } from 'pages/Allocation/constant';

function AllocStrategyName() {
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const assetList = useRecoilValue(assetListState);
  const [strategy, setStrategy] = useRecoilState(strategyState);
  const { algo, allocRebalancing, level, strategyName, ...rest } = strategy;

  const handleStrategyNameChange = (value: string) => {
    setStrategy((prev) => ({ ...prev, strategyName: value }));
  };

  const handleStrategySave = () => {
    // 1. 저장 완료 모달 렌더링
    setShowCompleteModal((prev) => !prev);

    // 2. 저장 API 대신 console.log로 최종 값 확인
    const formatted = {
      algo: ALLOC_ALGORITHM[algo],
      allocRebalancing: ALLOC_REBALANCING[allocRebalancing],
      assetList,
      level: ALLOC_LEVEL[level],
      strategyName,
      ...rest,
    };

    console.log('전략 저장', formatted);
  };

  const toggleCompleteModal = () => {
    setShowCompleteModal((prev) => !prev);
  };

  return (
    <Modal>
      <Modal.Trigger>
        <StrategyName value={strategyName} onChange={handleStrategyNameChange} onSave={handleStrategySave} />
      </Modal.Trigger>
      <Modal.Dimmed isOpen={showCompleteModal} onClose={toggleCompleteModal} />
      <Modal.Contents isOpen={showCompleteModal} onClose={toggleCompleteModal}>
        <Modal.Title>전략 저장 완료</Modal.Title>
        <Description>
          <Text.Regular weight={300}>{`"${strategyName}" 전략 저장이 완료되었습니다.`}</Text.Regular>
          <Text.Regular weight={300}>저장된 전략은 마이페이지-전략 조회에서 조회 가능합니다.</Text.Regular>
        </Description>
        <Modal.Button onClick={toggleCompleteModal}>확인</Modal.Button>
      </Modal.Contents>
    </Modal>
  );
}

export default AllocStrategyName;

const Description = styled(Modal.Description)`
  row-gap: 10px;
`;
