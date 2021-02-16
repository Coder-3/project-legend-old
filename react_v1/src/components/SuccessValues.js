import React, { useState } from 'react'

const NormalRegularExtremeSuccess = ({ value, changeValue }) => {
  const [ value, setValue ] = useState(0)

  return (
    <div>
      <input type="text" value={value} onChange={changeValue}></input>
      <p>{value/2}</p>
      <p>{value/5}</p>
    </div>
  )
}

export default NormalRegularExtremeSuccess