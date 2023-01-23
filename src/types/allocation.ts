import { ALLOC_ALGORITHM, ALLOC_LEVEL, ALLOC_REBALANCING } from 'pages/Allocation/constant';

type IAllocAlgoList = keyof typeof ALLOC_ALGORITHM;
type IAllocRebalancingList = keyof typeof ALLOC_REBALANCING;
type IAllocLevelList = keyof typeof ALLOC_LEVEL;

export interface IStrategy {
  algo: IAllocAlgoList;
  allocRebalancing: IAllocRebalancingList;
  assetList: IAsset[];
  band: string;
  endDate: string;
  level: IAllocLevelList;
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
