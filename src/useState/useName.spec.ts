import { renderHook, act } from '@testing-library/react-hooks';
import { useName } from './useName';

describe('useName specs', () => {
  it('should return an object with name equals "Dat" and setName a function when it calls it', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useName());

    // Assert
    expect(result.current.name).toEqual('Dat');
    expect(result.current.setName).toEqual(expect.any(Function));
  });

  it('should update name when it calls setName', () => {
    // Arrange
    const newName = 'updated name';

    // Act
    const { result } = renderHook(() => useName());

    act(() => {
      result.current.setName(newName);
    });

    // Assert
    expect(result.current.name).toEqual('updated name');
  });
});
