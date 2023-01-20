export interface IAllocation {
  algorithm: string; // TODO: data -> union
  cycle: string; // TODO: data -> union
}

export type IAllocationKeys = keyof IAllocation;
