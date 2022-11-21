
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode ("dark")
      document.body.style.backgroundColor ="#40E0D0";
    }else{
      setMode ("light")
      document.body.style.backgroundColor ="white";
    }
  }
  return (
    <>
    {/*<Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
    <Navbar title="TextUtils" mode= {mode} toggleMode = {toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
    </div>
    <Footer/>
    </>
  );
}

export default App;