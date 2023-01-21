
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data,setData]=useState("");


const getData=async()=>{
  const d=await axios.get('http://localhost:3000/home/getAllUsers')
  setData(d.data)
}
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      {JSON.stringify(data)}
      
    </div>
  )
}

export default App