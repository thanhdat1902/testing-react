import * as React from 'react';
import { render } from '@testing-library/react';
import { SayHello } from './say-hello';

describe('SayHello component specs', () => {
  it('should display the person name', () => {
    // Arrange
    const person = 'Dat';

    // Act
    const { getByText } = render(<SayHello person={person} />);

    // Assert
    const element = getByText('Hi Dat!');
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('H1');
  });

  it('should display the person name using snapshot testing', () => {
    // Arrange
    const person = 'Dat';

    // Act
    const { asFragment } = render(<SayHello person={person} />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the person name using jest-dom', () => {
    // Arrange
    const person = 'Dat';

    // Act
    const { getByText } = render(<SayHello person={person} />);

    const element = getByText('Hi Dat!');

    // Assert
    expect(element).toBeInTheDocument();
  });
});
