import { useForm } from 'react-hook-form';
import { useShallow } from 'zustand/shallow';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';
import { Input } from './input';

import { useStore } from '@/store';

export function UserProfile() {
  console.log('UserProfile rendered');

  const { user, setUsername } = useStore(
    useShallow((state) => ({
      user: state.user.data,
      setUsername: state.user.setUsername,
    }))
  );

  const form = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      username: user.username,
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    setUsername(data.username);
  });

  return (
    <div className="space-y-4">
      <Avatar>
        <AvatarImage
          src={`https://github.com/${user.username}.png`}
          alt={`@${user.username}`}
        />

        <AvatarFallback>
          {user.username.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <Input type="text" {...form.register('name')} disabled />
      <Input type="text" {...form.register('email')} disabled />

      <form className="flex gap-4" onSubmit={handleSubmit}>
        <Input type="text" {...form.register('username')} />

        <Button type="submit">Salvar</Button>
      </form>
    </div>
  );
}
