import './navbar.css'
import {Sling as Hamburger} from 'hamburger-react'

const Navbar = () => {
  
  return(
    <div className='navbarContainer'>
      <nav>
          <ul id="nav-options" className="closed">
              <li></li>
              <li data-visible="false"><a href="github.com" onClick={() => window.location.reload()}>Hangman</a></li>
              <li data-visible="false"><a href="github.com">Snake</a></li>
              <li data-visible="false"><a href="github.com">Mario Run</a></li>
              <li></li>
          </ul>
          <span id='hamburger'>
          <Hamburger
          rounded
          easing="ease-in"
          distance="sm"
          color='#FFB830'
          onToggle={toggled => {
              if (toggled) {
                document.querySelector("#nav-options").style.transform = "translateX(0)";
                document.querySelectorAll("#nav-options li").forEach(li => li.setAttribute("data-visible", true));
              } else {
                document.querySelector("#nav-options").style.transform = "translateX(-100%)";
                document.querySelectorAll("#nav-options li").forEach(li => li.setAttribute("data-visible", false));
              }
          }} />
          </span>
      </nav>
    </div>
  )
}

export default Navbar