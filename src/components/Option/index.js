import './option.css'
import Tilt from '../../Tilt'
import library from '../../wordLibrary'

const Option = (props) => {

    const word = library[props.category][Math.floor(Math.random() * props.category.length)]

    const selectOption = () => {
        props.setword(word)
        props.setoption(true) //disable option buttons
        props.setcue(word.replace(/\S/g, "_").split(""))
    }

    return(
        <Tilt className="optionBox"
        options={{scale: 1.3, max: 25, speed: 500, reset: false}}
        aria-disabled={props.option}>

            <button 
                className="optionInside" 
                onClick={() => {selectOption(); props.scrollFunc()}} 
                disabled={props.option}>

                    <button className='optionText' disabled={props.option}>
                        {props.category}
                    </button>
                    
            </button>

        </Tilt>
    )
}

export default Option