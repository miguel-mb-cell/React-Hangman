import Title from '../Title'
import Letters from '../Letters'
import Cues from '../Cues'
import Drawing from '../Drawing'
import Option from '../Option'
import Result from '../Result'
import './container.css'
import { useRef, useState } from 'react'

const Container = () => {

    const [option, setoption] = useState(false)

    const [letters, setletters] = useState(true)

    const [word, setword] = useState('') //set at Option

    const [cue, setcue] = useState('') //set at Option, updated at Letters

    const [badguess, setbadguess] = useState('') //set at Letters

    const [update, setupdate] = useState('') //set at Letters

    const [mistakes, setmistakes] = useState(0) //set at Letters
    
    const [result, setresult] = useState('')

    const scrollRef = useRef(null);
    const scrollFunc = () => {
        scrollRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'center'
        })
      }

    return(
        <div id='container'>
            
            <section id='select'>
            
                <Title/>

                <section id='options'>
                    <Option 
                        category="Animals"
                        setword={setword}
                        option={option}
                        setoption={setoption}
                        setcue={setcue}
                        scrollFunc={scrollFunc}
                    />
                    <Option 
                        category="Occupations"
                        setword={setword}
                        option={option}
                        setoption={setoption}
                        setcue={setcue}
                        scrollFunc={scrollFunc}
                    />
                    <Option 
                        category="Countries"
                        setword={setword}
                        option={option}
                        setoption={setoption}
                        setcue={setcue}
                        scrollFunc={scrollFunc}
                    />
                </section>

            </section>{/*select*/}

            <section id="content" ref={scrollRef}>
                <section id='visuals'>
                    <Drawing mistakes={mistakes} 
                    setresult={setresult} 
                    cue={cue} 
                    setletters={setletters}
                    setoption={setoption}
                    />
                    <Cues cue={cue} 
                    badguess={badguess} 
                    update={update}
                    />
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
                        setletters={setletters}
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