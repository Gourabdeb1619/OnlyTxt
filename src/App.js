import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Txtform from './components/Txtform';
import { useState } from 'react';
import Alerts from './components/Alerts';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [first, setfirst] = useState(second)
 

  const popalert =(message ,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  

  // const pushalert =(popup)=> {
  //   setAlert({
  //     popup:popup
  //   })
  // }

  

  const togglemode= ()=>{
    if(mode === 'light')
    {
    setMode('dark');
    document.body.style.backgroundColor = '#041935';
    popalert(" Dark mode enabled","success");
    
    }
    else 
    {
      setMode('light');
      document.body.style.backgroundColor = '#cedce4';
      popalert(" Light mode enabled","success");

    }
  }

  return (
   <>
     
   {/* <link rel="stylesheet" href="onlytxtlogo.png" /> */}
   <Navbar title="OnlyTxt" mode={mode} homepage="Home" togglemode={togglemode} />
   <Alerts alert={alert}/>
   
   
      {/* <Navbar /> */}
      <div className="container my-3" >
        
      <Txtform popalert={popalert} heading="Enter Text Below" textarea=""  mode={mode}/>
      </div>
      {/* <borders/> */}
     
      
   </>

  );
}

export default App;
