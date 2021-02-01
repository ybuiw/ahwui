import React from 'react';
import { Button, Input } from '../components';
import './App.css';

const App = () => {
  const onChange = (v: string) => {
    console.log(v)
  }
  return (
    <div className="App">
      <div className="display">
        <Button type="primary" size="large" style={{ marginRight: '10px' }}>按钮</Button>
        <Input size="large" disabled placeholder="请输入" defaultValue="张三" />
      </div>
      <div className="display">
        <Button type="primary" style={{ marginRight: '10px' }}>按钮</Button>
        <Input placeholder="请输入" defaultValue="张23" beforefix={
          <>图表</>
        } afterfix="个" onChange={onChange} />
      </div>
      <div className="display">
        <Button type="primary" size="small" style={{ marginRight: '10px' }}>按钮</Button>
        <Input size="small" placeholder="请输入" beforefix={
          <>图表</>
        } />
      </div>
    </div>
  );
}

export default App;
