import { atom } from 'recoil';
import dayjs from 'dayjs';
import { IStrategy } from 'types/allocation';

export const strategyState = atom<IStrategy>({
  key: 'strategy',
  default: {
    algo: '전략배분 (정적자산배분)',
    allocRebalancing: '월별',
    assetList: [],
    band: '0',
    endDate: dayjs().format('YYYY.MM.DD'),
    level: '중급',
    startDate: dayjs().subtract(20, 'year').format('YYYY.MM.DD'),
    strategyName: '',
  },
});
