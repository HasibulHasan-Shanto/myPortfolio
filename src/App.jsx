

import Loading from './pages/Loading'
import './index.css'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {


  const [isLoaded , setIsLoaded] = useState(false)
  const [menuOpen , setMenuOpen] = useState(false)
  return (
<>
{!isLoaded && <Loading onComplete={()=>setIsLoaded(true)}/>}

<div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100` }>
  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <Home/>
  <About/>
  <Project/>
  <Contact/>
</div>
</>
  );
}

export default App;
