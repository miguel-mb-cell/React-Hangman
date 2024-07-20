import Letters from '../Letters'
import Cues from '../Cues'
import Drawing from '../Drawing'
import Option from '../Option'
import Result from '../Result'
import './container.css'

import { useState } from 'react'
import Tilt from '../../Tilt'

const Container = (props) => {

    const [option, setoption] = useState(false)

    const [letters, setletters] = useState(true)

    const [word, setword] = useState('') //set at Option
    
    const [cue, setcue] = useState('') //set at Option, updated at Letters

    const [badguess, setbadguess] = useState('') //set at Letters

    const [update, setupdate] = useState('') // to force rerender in cues after every letter click

    const [mistakes, setmistakes] = useState(0) //set at Letters
    
    const [result, setresult] = useState('')

    const refresh = () => {
        props.setTitle('Hangman Game')
        setoption(false)
        setletters(true)
        setword('')
        setcue('')
        setbadguess('')
        setupdate('')
        setmistakes(0)
        setresult('')
        document.querySelectorAll(".letter").forEach(letter => letter.disabled = true)
        document.querySelector("#headDefeat").style.visibility = "hidden";
        document.querySelector("#headVictory").style.visibility = "hidden";
        for (let i = 1; i < 6; i++) {
            document.getElementById('limb'+i).style.visibility = "hidden";
        }
        document.querySelector("#limb2").classList.remove("arm1");
        document.querySelector("#limb3").classList.remove("arm2");
        document.querySelector("#limb2").style.transform = "rotate(10deg)";
        document.querySelector("#limb2").style.marginTop = "0";
        document.querySelector("#limb3").style.transform = "rotate(-10deg)";
        document.querySelector("#limb3").style.marginTop = "0";
        document.querySelector("#lever").style.transform = "rotate(-20deg)";
        document.querySelector("#trap-door1").style.transform = "rotate(0deg)";
        document.querySelector("#trap-door2").style.transform = "rotate(0deg)";
        document.querySelector("#doll").style.marginTop = "0";
        document.querySelector("#sweatLeverHover").style.display = "block";
        document.querySelectorAll(".firework").forEach(e => e.style.display = "none");
        document.querySelector("#lever").disabled = false;
    }

    return(
        <div id='container'>
            
            <section id='select'>

                <section id='options'>
                    <Option 
                        category="Animals"
                        setword={setword}
                        option={option}
                        setoption={setoption}
                        setcue={setcue}
                        setletters={setletters}
                        setTitle={props.setTitle}
                    />
                    <Option 
                        category="Occupations"
                        setword={setword}
                        option={option}
                        setoption={setoption}
                        setcue={setcue}
                        setletters={setletters}
                        setTitle={props.setTitle}
                    />
                    <Option 
                        category="Countries"
                        setword={setword}
                        option={option}
                        setoption={setoption}
                        setcue={setcue}
                        setletters={setletters}
                        setTitle={props.setTitle}
                    />
                </section>

            </section>{/*select*/}

            <section id="content">
                <section id='visuals'>
                    <Drawing mistakes={mistakes}
                    result={result}
                    setresult={setresult} 
                    cue={cue} 
                    setletters={setletters}
                    setoption={setoption}
                    />
                    <Cues cue={cue} 
                    badguess={badguess} 
                    update={update}
                    
                    />
                    <Tilt id="reset" onClick={refresh}>
                        <div id="resetInside">
                            <a href="#select">Reset</a>
                        </div>
                    </Tilt>
                </section>

                <section id='letters'>
                    <Letters 
                        word={word} 
                        cue={cue} 
                        setcue={setcue}
                        badguess={badguess}
                        setbadguess={setbadguess}
                        setupdate={setupdate}
                        mistakes={mistakes}
                        setmistakes={setmistakes}
                        letters={letters}
                />
                </section>

                <section id='result'>
                    <Result 
                    result={result}
                    word={word}
                    />
                </section>

            </section>{/*content*/}
        </div>
    )
}

export default Container