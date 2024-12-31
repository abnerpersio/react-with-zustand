import { StateCreator } from 'zustand';

import { CounterSlice } from './slices/counter';
import { UserSlice } from './slices/user';

export type Store = {
  user: UserSlice;
  counter: CounterSlice;
};

export type StoreSlice<TSlice> = StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/immer', never]],
  [],
  TSlice
>;
