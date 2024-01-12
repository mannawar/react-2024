import './App.css';
import { Person} from './pages/Person';
import {PropTypes} from 'prop-types'

function App() {
  return (
    <>
      <div className='App'>
        لا إله إلا الله محمد رسول الله
        <Person 
          name="Ghuncha"
          email="g@test.com"
          age={28}
          isMarried = {true}
          friends={["Jessica", "Jake", "Jane"]}
          />
      </div>
    </>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string)
}

export default App;
