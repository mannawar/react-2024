
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home.js';
import {Profile} from './pages/Profile.js';
import {Menu} from './pages/Menu.js';
import {Contact} from './pages/Contact.js';
import { NavBar } from './pages/NavBar.js';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries:{
        refetchOnWindowFocus: true
    }}
  });
  return (
    <>
      <div className='App'>
        <QueryClientProvider client={client}>
        لا إله إلا الله محمد رسول الله
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
          </QueryClientProvider> 
      </div>
    </>
  );
}

export default App;
