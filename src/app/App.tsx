import React from 'react';
import { Card } from '../components';
import './App.css';

const App = () => {
  const onChange = (v: string) => {
    console.log(v)
  }
  return (
    <div className="App">
      <Card
        title="我是标题"
        isHover
        cover={<img src="http://img.netcoc.com/system/0/233/881_1593580363_9.jpg" />}
        coverStyle={{margin: '0 20px'}}
        style={{width: '300px'}}
      >
        我是内容
      </Card>
    </div>
  );
}

export default App;
