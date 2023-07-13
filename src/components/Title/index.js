import './title.css'

const Title = (props) => {

    const titleStr = props.title
    const titleArr = titleStr.split('')
    let key = 0

    return (
        <span className='title'>
            <ul>
            {titleArr.map( letter => {
                    if (letter === ' ') { 
                        return <li key={key++}>&nbsp;</li>
                    } else {
                        return <li key={key++}>{letter}</li>
                    }
                    }
                )}
            </ul>
        </span>
    )
}

export default Title