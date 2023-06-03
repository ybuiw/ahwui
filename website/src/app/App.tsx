import { Drawer } from '@ahwui/ui'
import React, { useState } from 'react';

const App = () => {
  const [start, setStart] = useState<boolean>(false);

  return (
    <div className="App">
      <button onClick={() => {
        console.log(66, start)
        setStart(true)
      }}>click {JSON.stringify(start)}</button>
      <Drawer visible={start} onClose={() => setStart(false)}>
        2222
      </Drawer>
    </div>
  )
}

export default App;
