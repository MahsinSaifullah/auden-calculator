import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Keypad: React.FC = () => {
  return <Wrapper>Keypad</Wrapper>;
};
