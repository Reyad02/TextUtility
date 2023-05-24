// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import  React,{ useState } from 'react';
// // import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert= (msg,typ)=>{
      setalert({
        message: msg,
        type: typ
      })

      setTimeout(() => {
        setalert(null);
      }, 2000);
  }

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#5F6368';
      showAlert("Dark mode enabled","success");
      // document.title="TopScribe Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
      // document.title="TopScribe Light Mode";


    }
  }

  return (
    <>
    <Router>
      {/* <Navbar title="Blog" section1="Home" section2="About"/> */}
      <Navbar title="TextUtils"  section2="About" mode={mode} toggleMode={toggleMode}/>
      {/* <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode}/> */}

      {/* <Navbar  section1="Home" section2="About"/> */}
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container my-3" >
      <Routes>   
          <Route exact path="/TextUtility/about" element={<About mode={mode}/>} />
          <Route path="/TextUtility" element={
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode}/>
           } />
        </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;
