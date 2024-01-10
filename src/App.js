
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home.js';
import {Profile} from './pages/Profile.js';
import {Menu} from './pages/Menu.js';
import {Contact} from './pages/Contact.js';
import { NavBar } from './pages/NavBar.js';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [name, setName] = useState("Ghuncha");
  
  return (
    <>
      <div className='App'>
      لا إله إلا الله محمد رسول الله
        <AppContext.Provider value={{name, setName}}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/menu" element={<Menu/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<h1>Page Not Found</h1>} />

            </Routes>
          </Router>   
        </AppContext.Provider>     
      </div>
    </>
  );
}

export default App;
