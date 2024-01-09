import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [excuse, setExcuse] = useState("");



  const handleExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setExcuse(res.data[0].excuse);
      console.log(res.data);
    })
  }

  
  return (
    <>
      <div className='App'>
        "Allah is the only God!"
        <div className='App'>
          <h1>Create an excuse</h1>
          <button onClick={() =>handleExcuse("party")}>Party</button>
          <button onClick={() =>handleExcuse("family")}>Family</button>
          <button onClick={() =>handleExcuse("office")}>Office</button>
          <p>{excuse}</p>


        </div>
      </div>
    </>
  );
}

export default App;
