import React, {} from 'react';
import { Input, Select, Button } from '../components';
// import { Select } from 'antd';
import './App.css';

const { Option } = Select;


const App = () => {
  const onChange = (v: string) => {
    console.log(v)
  }
  const click = () => {
    console.log(111)
  }
  return (
    <div>
      <div className="App" style={{ paddingLeft: '100px'}}>
        <Button type="primary" style={{ marginRight: 5}} onClick={click}>按钮</Button>
        <Button type="primary" style={{ marginRight: 5}}>按钮</Button>
        <Input placeholder="请输入" />
        <Input placeholder="请输入" beforefix="总金额" afterfix="元" />
        <Select style={{ width: '200px'}}>
          <Option value="1">测试1</Option>
          <Option value="2">测试2</Option>
          <Option value="3">测试3</Option>
        </Select>

        <div className="pos">
          <Select defaultValue="" onChange={onChange} allowClear isPos>
            <Option value="1">1111</Option>
            <Option disabled value="2">222</Option>
            <Option value="3">333</Option>
            <Option value="4">444</Option>
          </Select>
        </div>
        <Select style={{ width: '200px'}}>
          <Option value="1">测试1</Option>
          <Option value="2">测试2</Option>
          <Option value="3">测试3</Option>
        </Select>
        
        {/* <Select style={{ width: '200px', display: 'inline-block'}} options={[
          {label: '测试1', value: 1},
          {label: '测试2', value: 2},
          {label: '测试3', value: 3}
        ]} /> */}
      </div>
    </div>
  );
}

export default App;
