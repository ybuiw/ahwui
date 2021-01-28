import React from 'react';
import { Button } from '../components';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <div>
        <Button type="success" size="large">
          主要按钮
        </Button>
        <Button icon="chrome" type="success" link loading>
          成功按钮
        </Button>
        <Button icon="taobao" type="warning" link loading>
          警告按钮
        </Button>
        <Button type="danger">错误按钮</Button>
        <Button icon="chrome" type="light">
          亮按钮
        </Button>
        <Button icon="apple" type="dark">
          暗按钮
        </Button>
        <Button type="dark">暗按钮</Button>
      </div>
    </header>
  </div>
);

export default App;
