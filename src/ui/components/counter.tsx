import { useShallow } from 'zustand/shallow';

import { Button } from './button';

import { useStore } from '@/store';

export function Counter() {
  console.log('Counter rendered');

  const { counter, increment } = useStore(
    useShallow((store) => ({
      counter: store.counter.value,
      increment: store.counter.increment,
    }))
  );

  return (
    <div>
      <h1>{counter}</h1>

      <Button type="button" onClick={increment}>
        Incrementar
      </Button>
    </div>
  );
}
