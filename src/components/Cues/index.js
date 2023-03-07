import './cues.css'
import Tilt from '../../Tilt'

const Cues = (props) => {

    const refresh = () => window.location.reload(true)

    if (!(props.cue.includes('_'))){
        
    }
    
    return(
        <div id="cues">
            {(props.cue.length !== 0) ?
            <div id="rightGuesses">{props.cue}</div> :
            <div id="rightGuesses">Select an option</div>
            }
            <div id="wrongGuesses">Wrong guesses:{props.badguess}</div>
            <Tilt id="reset" onClick={refresh}><div id="resetInside"><a href="github.com">Reset</a></div></Tilt>
        </div>
    )
}

export  default Cues