import { atom } from 'recoil';
import dayjs from 'dayjs';
import { IAsset, IStrategy } from 'types/allocation';

export const strategyState = atom<IStrategy>({
  key: 'strategy',
  default: {
    algo: '전략배분 (정적자산배분)',
    allocRebalancing: '',
    band: '',
    endDate: dayjs().format('YYYY.MM.DD'),
    level: '중급',
    startDate: dayjs().subtract(20, 'year').format('YYYY.MM.DD'),
    strategyName: '',
  },
});

export const assetListState = atom<IAsset[]>({
  key: 'assetList',
  default: [],
});
