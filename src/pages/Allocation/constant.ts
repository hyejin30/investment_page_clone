/* eslint-disable @typescript-eslint/naming-convention */

export const ALLOC_ALGORITHM = {
  ko: {
    '전략배분 (정적자산배분)': 'static_alloc',
    듀얼모멘텀: 'dual_momentum',
    VAA: 'vaa',
    DAA: 'daa',
  },
  en: {
    static_alloc: '전략배분 (정적자산배분)',
    dual_momentum: '듀얼모멘텀',
    vaa: 'VAA',
    daa: 'DAA',
  },
};

export const ALLOC_REBALANCING = {
  ko: {
    월별: 'monthly',
    분기별: 'quater',
    반기별: 'halfly',
    매년: 'yearly',
    '하지 않음 (Buy-and-Hold)': 'none',
  },
  en: {
    monthly: '월별',
    quater: '분기별',
    halfly: '반기별',
    yearly: '매년',
    none: '하지 않음 (Buy-and-Hold)',
  },
};

export const ALLOC_LEVEL = {
  ko: {
    초급: 'easy',
    중급: 'intermediate',
    고급: 'advanced',
  },
  en: {
    easy: '초급',
    intermediate: '중급',
    advanced: '고급',
  },
};
