import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import About from './components/About';
import {
  BrowserRouter , Router,
  Routes,
  Link
} from "react-router-dom";
import{Route} from "react-router";
function App() {
  const[mode , setMode] = useState ('light');
  const[alert , setAlert] = useState (null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type : type
      })
  }
  const toggleMode=()=>{
    if(mode === "light"){
      setMode ("dark");
      document.body.style.backgroundColor = 'gray';
     showAlert("Dark mode has been enabled", "success");
     document.title = "TextUtils - Dark Mode";
     
     setInterval(() =>{
      document.title = "TextUtils is a Amazing Mode";
     }, 2000);
     setInterval(() =>{
      document.title = "TextUtils is a Amazing Mode";
     }, 1500);
    }
   
    
    else{
      setMode ("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
  <BrowserRouter>
<Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={Alert}/>
<div className="container my-3">
 <Routes>
  <Route path="/about" element={<About />} />
  <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze below!" mode={mode}/>} />          
 </Routes>
 </div>
 </BrowserRouter>
    </>
  );
}

export default App;
