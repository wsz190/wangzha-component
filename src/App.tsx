import React from 'react';
import './App.css';
import Button,{ButtonSize,ButtonType} from './components/Button/button'
function App() {
  return (
    <div className="App">
      <Button autoFocus>Hello</Button>
      <Button className='btn-xxx'>Hello</Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType="danger" size="lg">Primary-Lrage-Button</Button>
      <Button btnType="primary" size='sm'>Danger-Small-Button</Button> 
      <Button btnType='link' href='http://www.xxx.com' disabled>被禁用的按钮</Button> 
      <Button btnType='default' href='http://www.xxx.com'  target='target'>在新窗口打开</Button>
    </div>
  );
}

export default App;
