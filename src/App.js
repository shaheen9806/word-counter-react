
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';

function App() {
  const [mode, newmode] = useState("sun");
  const [mode1,newmode1] = useState("light");
  const ToggleLD = () => {
    if (mode === "sun") {
      newmode("moon");
      newmode1("dark");
      document.body.style.backgroundColor = '#0d2d5c';
      document.body.style.color = '#fff';
      document.title = 'Word Counter (Dark Mode)';
      }
    else {
      newmode("sun");
      newmode1("light");
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
      document.title = 'Word Counter';
    }
  };
  return (
    <>
    <Navbar title="Word Counter" mode={mode1} img="favicon-32x32.png"/>
    <div className="btn" onClick={ToggleLD}>
              <span>
              <i  class={`fa-regular fa-${mode}`} style={{ color: mode === 'sun'?'black':'white'}}></i>
              </span>
            </div>
      
      <div className="container my-3">
        <TextForm heading="Enter the text here" mode={mode1} />
      </div>
     
    </>
  );
}

export default App;
