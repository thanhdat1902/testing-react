import * as React from 'react';
import { User } from './model';

export const useUser = (initialUser: User) => {
  const [user, setUser] = React.useState(initialUser);

  React.useEffect(() => {
    // Simulate async call
    setTimeout(() => {
      setUser({ name: 'Boi', surname: 'Vo' });
    }, 500);
  }, []);

  return {
    user,
    setUser,
  };
};
