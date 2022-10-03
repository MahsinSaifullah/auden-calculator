import * as React from 'react';
import styled from 'styled-components';
import { Keypad } from './Keypad';
import { Operation } from './Operation';
import { Result } from './Result';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
`;

export const Calculator: React.FC = () => {
  return (
    <Wrapper>
      <Result />
      <Operation />
      <Keypad />
    </Wrapper>
  );
};
