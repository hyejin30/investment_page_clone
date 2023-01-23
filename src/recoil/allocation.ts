import { atom } from 'recoil';
import dayjs from 'dayjs';
import { IStrategy } from 'types/allocation';

export const strategy = atom<IStrategy>({
  key: 'strategy',
  default: {
    algo: 'static_alloc',
    allocRebalancing: 'monthly',
    assetList: [],
    band: '0',
    endDate: dayjs().format('YYYY.MM.DD'),
    level: 'intermediate',
    startDate: dayjs().subtract(20, 'year').format('YYYY.MM.DD'),
    strategyName: '',
  },
});
