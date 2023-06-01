import { CountDown } from '@ahwui/ui'
import React, { useState } from 'react';

const App = () => {
  const [start, setStart] = useState<boolean>(false);

  return (
    <div className="App">
      <CountDown
        isRun={start}
        onStart={() => setStart(true)}
        onChange={(isEnd) => isEnd && setStart(false)}
      />
    </div>
  )
}

export default App;
