import React from "react"
import '../menu/menu.scss';

const Menu = () => {

    function activateMenu(){
        let nav = document.getElementById("nav");
        if(nav.classList.contains("menu_active") === false ){
            nav.classList.add("menu_active");
            
        }else if(nav.classList.contains("menu_active") === true ){
          nav.classList.remove("menu_active");
      }
    }


    return(
        <div className="menu-container">
        
        <h3 onClick={activateMenu}>&lt;menu/&gt;</h3>
<nav className="menu" id="nav">
  <ol>
    <li className="menu-item"><a href="/">Home</a></li>
    {/* <li className="menu-item"><a href="/">Otra cosa</a></li> */}
    <li className="menu-item">
      <a href="/Projects">Projects</a>
      <ol className="sub-menu">
        <li className="menu-item"><a href="https://conido-test.vercel.app/" target="_blank">Conido Apartments</a></li>
        <li className="menu-item"><a href="https://pokeapi-one-delta.vercel.app/" target="_blank">Pokedex</a></li>
        <li className="menu-item"><a href="https://game-of-thrones-beige.vercel.app/" target="_blank">Game of Thrones index</a></li>
        <li className="menu-item"><a href="https://shopeame-angular-jade.vercel.app/" target="_blank">Shopeame</a></li>
        <li className="menu-item"><a href="#0" target="_blank">Applergic</a></li>
      </ol>
    </li>
    <li className="menu-item"><a href="https://www.linkedin.com/in/elisarb/" target="_blank">Contact me</a></li>
  </ol>
</nav>
        
        </div>
    )
}

export default Menu

