import * as React from 'react';
import styled from 'styled-components';

type OperationType = 'add' | 'substract' | 'multiple' | 'divide';
type OperationSymbol = '+' | '-' | '*' | '÷' | '';

interface OperationItemProps {
  _type: OperationType;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #9e9c9c;
  height: 48px;
  padding: 8px;
`;

const OperationItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: 'center';
  border: 1px solid black;
  height: 100%;
`;

const renderSymbol = (_type: OperationType): OperationSymbol => {
  switch (_type) {
    case 'add':
      return '+';
    case 'substract':
      return '-';
    case 'multiple':
      return '*';
    case 'divide':
      return '÷';

    default:
      return '';
  }
};

const AVAILABLE_OPERATION = ['add', 'substract', 'multiple', 'divide'];

const OperationItem: React.FC<OperationItemProps> = ({ _type }) => {
  return <OperationItemWrapper>{renderSymbol(_type)}</OperationItemWrapper>;
};

export const Operation: React.FC = () => {
  return (
    <Wrapper>
      {AVAILABLE_OPERATION.map((item, i) => {
        return <OperationItem key={i} _type={item as OperationType} />;
      })}
    </Wrapper>
  );
};
