import { ALLOC_ALGORITHM, ALLOC_LEVEL, ALLOC_REBALANCING } from 'pages/Allocation/constant';

export interface IAllocation {
  algo: keyof typeof ALLOC_ALGORITHM.en;
  allocRebalancing: keyof typeof ALLOC_REBALANCING.en;
  assetList: IAsset[];
  band: string;
  endDate: string;
  level: keyof typeof ALLOC_LEVEL.en;
  startDate: string;
  strategyName: string;
}

export interface IAsset {
  name: string;
  ratio: string;
}

export interface IStock {
  label: string;
  value: string;
  category: '한국 주식' | '미국 주식';
}
