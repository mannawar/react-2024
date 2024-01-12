import './App.css';
import { useCounter} from './hooks/useCounter';

function App() {
  const {state, handleIncrement, handleDecrement, handleReset} = useCounter(0);
  return (
    <>
      <div className='App'>
        لا إله إلا الله محمد رسول الله
        <div>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
          {state}
        </div>
      </div>
    </>
  );
}

export default App;
