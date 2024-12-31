import { Counter } from '@/ui/components/counter';
import { UserProfile } from '@/ui/components/user-profile';

export default function App() {
  console.log('App rendered');

  return (
    <div className="min-h-screen p-6 grid place-items-center">
      <div className="space-y-10">
        <Counter />

        <UserProfile />
      </div>
    </div>
  );
}
