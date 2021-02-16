import React, { useState } from 'react'
import NormalRegularExtremeSuccess from './components/SuccessValues' 

const App = () => {
  const [ value, setValue ] = useState(0)

  return (
    <div>
      <NormalRegularExtremeSuccess value={12} />
    </div>
  )
}

export default App;
