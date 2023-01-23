/* eslint-disable @typescript-eslint/naming-convention */

export const ALLOC_ALGORITHM = {
  '전략배분 (정적자산배분)': 'static_alloc',
  듀얼모멘텀: 'dual_momentum',
  VAA: 'vaa',
  DAA: 'daa',
};

export const ALLOC_REBALANCING = {
  월별: 'monthly',
  분기별: 'quater',
  반기별: 'halfly',
  매년: 'yearly',
  '하지 않음 (Buy-and-Hold)': 'none',
};

export const ALLOC_LEVEL = {
  초급: 'easy',
  중급: 'intermediate',
  고급: 'advanced',
};

export const ALLOC_ALGORITHM_LIST = Object.keys(ALLOC_ALGORITHM);
export const ALLOC_REBALANCING_LIST = Object.keys(ALLOC_REBALANCING);
export const ALLOC_LEVEL_LIST = Object.keys(ALLOC_LEVEL);
