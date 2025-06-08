'use client'
import { useState } from "react";
import { getData } from "../service";

const HOME = () => {
  const [data, setData] = useState(['']);
  const handleClick = async () => {
    const res = await getData('/api/details');
    console.log(res);
    setData(['data1', 'data2']);
  }
  return (
    <div>
      Home Page
      <br />
      <button onClick={handleClick}>button</button>
      {data.map((item) => {
        return <div key={item}>{item}</div>
      })}
    </div>
  )
}

export default HOME;