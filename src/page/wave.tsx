import React from 'react';
import { Wave } from '../components';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <div>
        {/* <Wave radius={50} progress={70} color={['#FF9745', '#4C94FF']} /> */}
        <Wave radius={70} progress={70} min={0} color={['#4C94FF', '#ff0000']}>
          <>
            <div>补贴资金剩余</div>
            <div>70%</div>
          </>
        </Wave>
      </div>
    </header>
  </div>
);

export default App;
