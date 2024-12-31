import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createCounterSlice } from './slices/counter';
import { createUserSlice } from './slices/user';
import { Store } from './store';

export const useStore = create<Store>()(
  devtools(
    immer((...params) => ({
      counter: createCounterSlice(...params),
      user: createUserSlice(...params),
    })),
    {
      name: 'main-store',
      enabled: import.meta.env.DEV,
    }
  )
);
