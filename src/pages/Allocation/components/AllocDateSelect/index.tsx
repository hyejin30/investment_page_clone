import { useSetRecoilState } from 'recoil';

import { DateSelectList } from 'components/organism';

import { strategyState } from 'recoil/allocation';

function AllocDateSelect() {
  const setStrategy = useSetRecoilState(strategyState);

  const handleDateSelect = (startDate: string, endDate: string) => {
    setStrategy((prev) => ({ ...prev, startDate, endDate }));
  };

  return <DateSelectList onSelect={handleDateSelect} />;
}

export default AllocDateSelect;
