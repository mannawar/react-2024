import Text from './Text';
import { useState } from 'react';
import './App.css';

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <div className='App'>
        "Allah is the only God!"
        <button onClick={() => {
          setShowText(!showText)
        }}>Show Text</button>
        {showText && <Text/>}
      </div>
    </>
  );
}

export default App;
