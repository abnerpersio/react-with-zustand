import { StoreSlice } from '../store';

type UserStore = {
  data: {
    name: string;
    username: string;
    email: string;
  };
};

type UserActions = {
  setUsername: (username: string) => void;
};

export type UserSlice = UserStore & UserActions;

export const createUserSlice: StoreSlice<UserSlice> = (set) => ({
  data: {
    name: 'Abner',
    username: 'abnerpersio',
    email: 'binhopersio@gmail.com',
  },
  setUsername: (username) =>
    set((prevState) => {
      prevState.user.data.username = username;
    }),
});
