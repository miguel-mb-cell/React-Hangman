import './cues.css'

const Cues = (props) => {

    if (!(props.cue.includes('_'))){
        
    }
    
    return(
        <div id="cues">
            {(props.cue.length !== 0) ?
            <div id="rightGuesses">{props.cue}</div> :
            <div id="rightGuesses">Select an option</div>
            }
            <div id="wrongGuesses">Wrong guesses:{props.badguess}</div>
        </div>
    )
}

export  default Cues