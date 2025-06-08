'use client'
import { useState } from "react";

const HOME = () => {
  const [data, setData] = useState(['']);
  const handleClick = async () => {
    setData(['data1', 'data2']);
  }
  return (
    <div>
      Homne Page
      <br />
      <button onClick={handleClick}>button</button>
      {data.map((item) => {
        return <div key={item}>{item}</div>
      })}
    </div>
  )
}

export default HOME;