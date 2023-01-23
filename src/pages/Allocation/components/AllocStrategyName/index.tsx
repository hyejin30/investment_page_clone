import { useRecoilState, useRecoilValue } from 'recoil';

import { StrategyName } from 'components/organism';

import { assetListState, strategyState } from 'recoil/allocation';
import { ALLOC_ALGORITHM, ALLOC_REBALANCING, ALLOC_LEVEL } from 'pages/Allocation/constant';

function AllocStrategyName() {
  const assetList = useRecoilValue(assetListState);
  const [strategy, setStrategy] = useRecoilState(strategyState);
  const { algo, allocRebalancing, level, strategyName, ...rest } = strategy;

  const handleStrategyNameChange = (value: string) => {
    setStrategy((prev) => ({ ...prev, strategyName: value }));
  };

  const handleStrategySave = () => {
    const formatted = {
      algo: ALLOC_ALGORITHM[algo],
      allocRebalancing: ALLOC_REBALANCING[allocRebalancing],
      assetList,
      level: ALLOC_LEVEL[level],
      strategyName,
      ...rest,
    };

    // 저장 API 대신 console.log로 최종 값 확인
    console.log('전략 저장', formatted);
    alert(`"${strategyName}" 전략 저장이 완료되었습니다.\n저장된 전략은 "마이페이지-전략 조회" 에서 조회 가능합니다.`);
  };

  return <StrategyName value={strategyName} onChange={handleStrategyNameChange} onSave={handleStrategySave} />;
}

export default AllocStrategyName;
