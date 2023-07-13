import './App.css';
import Title from './components/Title'
import Container from './components/Container';
import Fireworks from './components/Fireworks';
import Navbar from './components/Navbar';

import { useEffect } from 'react';
import { useState } from 'react';

function App() {

    const [title, setTitle] = useState('Hangman Game')

    useEffect(() => {
        const cursor = document.querySelector('#cursor')
        const positionElement = (e)=> {
            const mouseY = e.clientY
            const mouseX = e.clientX
            
            cursor.style.top = `${mouseY}px`
            cursor.style.left = `${mouseX}px`
        }
        window.addEventListener('mousemove', positionElement)
    })

    return (
        <div className="App">
            <Title title={title}/>
            <div id='cursor'/>
            <Navbar id='navbarComponent'/>
            <Container id='containerComponent' setTitle={setTitle}/>
            <Fireworks/>
        </div>
    );
}

export default App;
