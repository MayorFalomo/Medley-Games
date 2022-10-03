import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import Typewriter from 'typewriter-effect';
import vectorLogo from '../src/components/images/vectorLogo.svg'

import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Errorpage from './components/pages/Errorpage/Errorpage';
import Homepage from './components/pages/homepage/Homepage';
import Ourshop from './components/pages/Ourshop/Ourshop';
import Preorder from './components/pages/preorder/Preorder';

function App() {

  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 5000 )
  }, [])

  

  return (
    <div className="App">
      {!completed ? (
        <div className='contain'>
          {!loading ? (
            <div className='loader'>
                <div className='vector'><img src={vectorLogo} alt='img'/></div>
        <span>
                <div ><Typewriter className='typer'
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Medley Games")
                      .start();
                  }}
                />
                </div>
              </span>
            </div>
          ) : (
              <div className='completed'>Loaded</div>
          )}
        </div>
      ) : (
          <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/preorder' element={<Preorder/>} />
        <Route path='/Ourshop' element={<Ourshop/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Errorpage/>} />
            </Routes>
          </>
              )}
    </div>
  );
}

export default App;
