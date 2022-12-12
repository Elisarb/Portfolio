import React from 'react';
import '../Bienvenida/Bienvenida.scss';
import Slideshow from '../../components/slideshow/slideshow';
import TypeWriterEffect from 'react-typewriter-effect';
// import {ReactComponent as ReactLogo} from '../../assets/rocket.svg';
import Rocket from '../../assets/rocket.svg';
import Code from '../../assets/coding wpp.png';
import Code2 from '../../assets/coding b&w.png';
import Profile from '../../assets/yo png.png';
import { useNavigate } from "react-router-dom";
import Menu from "../../components/menu/menu.jsx"

const Bienvenida = () => {
  const navigate = useNavigate()

  function start(){
    console.log("started")
    let rocket = document.getElementById("rocket");
    let text = document.getElementById("welcome-text");
    let veil = document.getElementById("veil")
    if (text != null){
      if(text.classList.contains("text-leaves") === false ){
          text.classList.add("text-leaves");
          rocket.classList.add("rocket-lifted");
          veil.classList.add("veil-covers");
          setTimeout(function(){ 
            navigate(`/projects`);
          },3500);
          
      }else if(text.classList.contains("text-leaves") === true ){
        text.classList.remove("text-leaves");
        rocket.classList.remove("rocket-lifted");
    }
    }
  }

  return (
    <>
    <Slideshow></Slideshow>

    <div className="pag-bienvenida">
      {/* <ReactLogo /> */}
      <img src={Rocket} className="rocket" id="rocket" alt="rocket"/>
      {/* <div className="header">
        <img src= {Code2}/>
        {/* <img className= "profile" src= {Profile}/> */}
      {/* </div> */} 
      
      <div className="welcome-text" id="welcome-text">
          <h1>HELLO WORLD!</h1>
          <button className="start-btn" onClick={start}>START</button>
          </div>
    </div>
    <div className='veil' id="veil">
    </div>
    
    </>
  )
}

export default Bienvenida