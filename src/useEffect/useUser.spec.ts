import { renderHook, act } from '@testing-library/react-hooks';
import { User } from './model';
import { useUser } from './useUser';

describe('useUser specs', () => {
  it('should return user with initial values and setUser method when it calls it', async () => {
    // Arrange
    const initialUser: User = {
      name: 'Dat',
      surname: 'Nguyen',
    };

    // Act
    const { result, waitForNextUpdate } = renderHook(() =>
      useUser(initialUser)
    );

    // Assert
    expect(result.current.user).toEqual(initialUser);
    expect(result.current.setUser).toEqual(expect.any(Function));

    await waitForNextUpdate();

    const updatedUser: User = {
      name: 'Boi',
      surname: 'Vo',
    };
    expect(result.current.user).toEqual(updatedUser);
  });

  it('should update user when it calls setUser', async () => {
    // Arrange
    const initialUser: User = {
      name: 'Dat',
      surname: 'Nguyen',
    };

    // Act
    const { result, waitForNextUpdate } = renderHook(() =>
      useUser(initialUser)
    );

    await waitForNextUpdate();

    act(() => {
      result.current.setUser({
        name: 'updated name',
        surname: 'updated surname',
      });
    });

    // Assert
    expect(result.current.user).toEqual({
      name: 'updated name',
      surname: 'updated surname',
    });
  });
});
