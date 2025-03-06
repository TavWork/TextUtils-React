import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      console.log("In If condition");
      setMode("dark")
      document.body.style.backgroundColor="#063a6e"
      showAlert("Dark mode is enabled","success         ");
      document.title="TextUtils- Home Dark Mode";
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title="please use textUtils";
      // },1500);
    }else{
      console.log("In else condition");
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode is enabled","success");
      document.title="TextUtils- Home Light Mode";
      // setInterval(()=>{
      //   document.title="please use textUtils";
      // })
    }
  };

  return (
    <>
    {/* <Navbar title="NATA" aboutText="All about text utils" /> */}
    {/* <Router> */}
    <Navbar  title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert}/>
    <div className="container my-3">  
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={ */}
          <TextForm heading="Enter your text here for analysis"  mode={mode} showAlert={showAlert} />
      {/*      } />
       </Routes> */}

        {/* Creating a textform */}

        {/* //Learning about states */}
        {/* <About /> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
