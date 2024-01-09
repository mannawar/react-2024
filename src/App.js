import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const[name, setName] = useState("");
  const [detail, setDetail] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setDetail(res.data);
      console.log(res.data);
    })
  }
  
  return (
    <>
      <div className='App'>
        "Allah is the only God!"
        <input placeholder="type your name" onChange={((event) => setName(event.target.value))}/>
        <button onClick={fetchData}>Predict Age</button>
        <p>Name: {detail?.name}</p>
        <p>Age: {detail?.age}</p>
        <p>Count: {detail?.count}</p>
      </div>
    </>
  );
}

export default App;
