export interface IAllocation {
  algorithm: string; // TODO: data -> union
  cycle: string; // TODO: data -> union
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
