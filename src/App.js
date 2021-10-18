import './App.css';
import Navbar from './Components/Navbar'
import TextBox from './Components/TextBox'
import React, { useState } from 'react'
import Alert from './Components/Alert'
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {

  const bgclrfn1 = ()=>{
   document.body.style.color='white'
   document.body.style.backgroundColor='#175873';
 }
 const bgclrfn2 = ()=>{
   document.body.style.color='white'
   document.body.style.backgroundColor='#2B7C85';
 }
 const bgclrfn3 = ()=>{
   document.body.style.color='white'
   document.body.style.backgroundColor='#0C1446';
 }

  const [Mode, setMode] = useState('light');  //Whether Darkmode is enabled/disabled.
  const toggleMode= ()=>{
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.color='white'
      document.body.style.backgroundColor='black';
      showalert("Dark Mode Enabled","success");
    }else{  setMode('light')
      document.body.style.color='black'
      document.body.style.backgroundColor='white'; 
      showalert("Dark Mode Disabled","success");
    }
  }

  const [alert, setalert] = useState(null)
  const showalert= (message,type)=>{
    setalert({
      msg: message,
      type: type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }

  return (
  <>
   {/* <Router> */}
   <Navbar title="Text Editor" Mode={Mode} toggleMode={toggleMode} bgclrfn1={bgclrfn1} bgclrfn2={bgclrfn2} bgclrfn3={bgclrfn3} />
   <Alert alert={alert} />

   <div className="container my-3" >
    {/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/"> */}
            <TextBox showalert={showalert} title="Enter your text" />
          {/* </Route>
    </Switch>  */}
   </div>
   {/* </Router> */}

  </>
  );
}

export default App;