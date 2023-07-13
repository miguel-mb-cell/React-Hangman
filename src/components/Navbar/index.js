import './navbar.css'
import {Sling as Hamburger} from 'hamburger-react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import HangmanIcon from '../../Icons/HangmanIcon'
import SnakeIcon from '../../Icons/SnakeIcon'
import PacmanIcon from '../../Icons/PacmanIcon'
import GithubIcon from '../../Icons/GithubIcon'
import { useEffect } from 'react'

const Navbar = () => {

  useEffect(() => {
    const cursor = document.querySelector('#handle')
    const positionCursor = (e)=> {
        const mouseY = e.clientY
        
        if (mouseY > window.innerHeight / 3 && mouseY < (window.innerHeight / 3) * 2) {
          cursor.style.top = `${mouseY}px`;
        }
    }
    window.addEventListener('mousemove', positionCursor)

    const cursorBorder = document.querySelector('#handle_border')
    const positionCursorBorder = (e)=> {
        const mouseY = e.clientY
        
        if (mouseY > window.innerHeight / 3 && mouseY < (window.innerHeight / 3) * 2) {
          cursorBorder.style.top = `${mouseY}px`;
        }
    }
    window.addEventListener('mousemove', positionCursorBorder)
  })

  return(
    <div className='navbarContainer'>
      <nav>
      <div id='handle_border'></div>
      <div id='handle'>
        <Hamburger
              rounded
              easing="ease-in"
              distance="sm"
              color='#FFB830'
              onToggle={toggled => {
                if(toggled) {
                  document.querySelector('.navbarContainer').classList.remove('closeSideNav');
                  document.querySelector('.navbarContainer').classList.add('openSideNav');
                } else {
                  document.querySelector('.navbarContainer').classList.remove('openSideNav');
                  document.querySelector('.navbarContainer').classList.add('closeSideNav');
                }
              }} />
      </div>
          <ul id="nav-options">
              <li data-visible="false">
              <a href='https://github.com/miguel-mb-cell' draggable="false">
                <Canvas className='canvas'>
                  <OrbitControls enableZoom={false}/>
                  <ambientLight intensity={.5}/>
                  <directionalLight position={[-2, 5, 2]} intensity={.7}/>
                  <HangmanIcon className='hangman-icon'/>
                </Canvas>
              </a>
              </li>
              <li data-visible="false">
                <a href='https://github.com/miguel-mb-cell' draggable="false">
                  <Canvas className='canvas'>
                    <OrbitControls enableZoom={false}/>
                    <ambientLight intensity={.2}/>
                    <directionalLight position={[-2, 5, 2]} intensity={.7}/>
                    <SnakeIcon className='snake-icon'/>
                  </Canvas>
                </a>
              </li>
              <li data-visible="false">
                <a href='https://github.com/miguel-mb-cell' draggable="false">
                  <Canvas className='canvas'>
                    <OrbitControls enableZoom={false}/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[-2, 5, 2]} intensity={.7}/>
                    <PacmanIcon className='pacman-icon'/>
                  </Canvas>
                </a>
              </li>
              <li data-visible="false">
                <a href='https://github.com/miguel-mb-cell' draggable="false">
                  <Canvas className='canvas'>
                    <OrbitControls enableZoom={false}/>
                    <ambientLight intensity={.5}/>
                    <directionalLight position={[-2, 5, 2]} intensity={1}/>
                    <GithubIcon className='github-icon'/>
                  </Canvas>
                </a>
              </li>
          </ul>

          <span id='hamburger'>
            <Hamburger
            rounded
            easing="ease-in"
            distance="sm"
            color='#FFB830'
            onToggle={toggled => {
                if (toggled) {
                  if (window.matchMedia("(orientation: portrait)").matches) {
                    document.querySelector("#nav-options").style.transform = "translateX(0)";
                    document.querySelectorAll("#nav-options li").forEach(li => li.style.transform = "translateX(0)");
                  }
                  else {
                    document.querySelector("#nav-options").style.transform = "translateY(0)";
                    document.querySelectorAll("#nav-options li").forEach(li => li.style.transform = "translateY(0)");
                  }
                } else {
                  if (window.matchMedia("(orientation: portrait)").matches) {
                    document.querySelector("#nav-options").style.transform = "translateX(-100%)";
                    document.querySelectorAll("#nav-options li").forEach(li => li.style.transform = "translateX(-200%)");
                  }
                  else {
                    document.querySelector("#nav-options").style.transform = "translateY(-100%)";
                    document.querySelectorAll("#nav-options li").forEach(li => li.style.transform = "translateY(-200%)");
                  }
                }
            }} />
          </span>

      </nav>
    </div>
  )
}

export default Navbar