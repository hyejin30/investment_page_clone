import { useRecoilState } from 'recoil';

import { StrategyName } from 'components/organism';

import { strategyState } from 'recoil/allocation';
import { ALLOC_ALGORITHM, ALLOC_REBALANCING, ALLOC_LEVEL } from 'pages/Allocation/constant';

function AllocStrategyName() {
  const [strategy, setStrategy] = useRecoilState(strategyState);

  const handleStrategyNameChange = (strategyName: string) => {
    setStrategy((prev) => ({ ...prev, strategyName }));
  };

  const handleStrategySave = () => {
    const { algo, allocRebalancing, level, strategyName, ...rest } = strategy;

    const formatted = {
      algo: ALLOC_ALGORITHM[algo],
      allocRebalancing: ALLOC_REBALANCING[allocRebalancing],
      level: ALLOC_LEVEL[level],
      strategyName,
      ...rest,
    };

    // 저장 API 대신 console.log로 최종 값 확인
    console.log('전략 저장', formatted);
    alert(`"${strategyName}" 전략 저장이 완료되었습니다.\n저장된 전략은 "마이페이지-전략 조회" 에서 조회 가능합니다.`);
  };

  return <StrategyName onChange={handleStrategyNameChange} onSave={handleStrategySave} />;
}

export default AllocStrategyName;
