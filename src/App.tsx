import * as React from 'react';
import styled from 'styled-components';

import { Calculator } from './components';

const MainWrapper = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <MainWrapper>
      <Calculator />
    </MainWrapper>
  );
};

export default App;
