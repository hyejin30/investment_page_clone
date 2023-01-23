import { useRecoilState } from 'recoil';

import { MultiDateSelect } from 'components/organism';

import { strategyState } from 'recoil/allocation';

function AllocDateSelect() {
  const [strategy, setStrategy] = useRecoilState(strategyState);
  const { startDate, endDate } = strategy;

  const handleDateSelect = (start: string, end: string) => {
    setStrategy((prev) => ({ ...prev, startDate: start, endDate: end }));
  };

  return <MultiDateSelect data={{ startDate, endDate }} onSelect={handleDateSelect} />;
}

export default AllocDateSelect;
