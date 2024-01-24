
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar1 from './components/Navbar1'
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      showAlert("dark mode has been enabled", "success")

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled", "success")



    }
  }


  return (
    <BrowserRouter>
  <Navbar1 title="Vinay." mode={mode} toggleMode={toggleMode} />
  <Routes>
    <Route path='/' element={<>
      <Alert alert={alert} />
      <div className='container-fluid w-75 my-4 shadow'>
        <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      </div>
    </>} />
    <Route path='/about' element={<About mode={mode} />} />
  </Routes>
</BrowserRouter>

  );
}

export default App;
