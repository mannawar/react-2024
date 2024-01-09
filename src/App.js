import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [catFact, setCatFact] = useState("");

  const btnClick = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    })
  }
  
  useEffect(() => {
    btnClick();
  },[])


  
  return (
    <>
      <div className='App'>
        "Allah is the only God!"
        <button onClick={btnClick}>Generate Cat Fact</button>
        <p>{catFact}</p>
      </div>
    </>
  );
}

export default App;
