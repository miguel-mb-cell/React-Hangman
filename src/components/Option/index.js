import './option.css'
import Tilt from '../../Tilt'
import Library from '../../wordLibrary'

const Option = (props) => {

    let word = Library[props.category][Math.floor(Math.random() * Library[props.category].length)]

    const selectOption = () => {
        props.setword(word)
        props.setoption(true) //disable option buttons
        props.setletters(false) //enable letters
        props.setcue(word.replace(/\S/g, "_").split(""))
        props.setTitle(props.category)
    }

    return(
        <Tilt className="optionBox"
        options={{scale: 1.3, max: 25, speed: 500}}
        aria-disabled={props.option}>

            <a  href='#content'
                className="optionInside" 
                onClick={() => selectOption()} 
                disabled={props.option}>

                    <p
                    className='optionText' 
                    aria-disabled={props.option}>
                        {props.category}
                    </p>
            </a>

        </Tilt>
    )
}

export default Option