import * as React from 'react';

export const useName = () => {
  const [name, setName] = React.useState('Dat');

  return {
    name,
    setName,
  };
};
