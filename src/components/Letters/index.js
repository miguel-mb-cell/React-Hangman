import './letters.css'
import Tilt from '../../Tilt'

const Letters = (props) => {

    let alphabetStr = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ'
    let aplphabetArr = alphabetStr.split('')

    let localMistakes = props.mistakes
        
    function guess(letter) {
        if (props.word.includes(letter)) {
            for (let i = 0; i < props.word.length; i++) {
                if (props.word[i] === letter) {
                    props.cue[i] = letter
                    props.setcue(props.cue)
                    props.setupdate(i)
                }
            }
        } else {
            props.setbadguess(props.badguess + ' ' + letter)
            localMistakes++
            props.setmistakes(localMistakes)
        }
        document.getElementById(letter).disabled = true;
    }

    return(
        <>
        {aplphabetArr.map(letter => 
            <Tilt className='letter'
            key={letter}
            options={{scale: 1.2, max: 35, perspective: 150}}
            aria-disabled={props.letters}>
                <button onClick={ () => {guess(letter)}} disabled={props.letters} id={letter}>
                    {letter}
                </button>
            </Tilt>
        )}
        </>
    )
}

export default Letters