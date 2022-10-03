import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 48px;
  background-color: black;
  color: white;
  text-align: right;
  padding: 8px;
`;

export const Result: React.FC = () => {
  return (
    <Wrapper>
      <h1>100</h1>
    </Wrapper>
  );
};
