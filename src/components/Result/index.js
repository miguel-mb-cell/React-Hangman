import './result.css'

const Result = ({result, word}) => {

    const answer = word.toLowerCase().replace(/[ ]/g, '')

    const answerArr = [<span>"</span>];

    /*const answerArr = answer.split('').map(letter => {
        return <span className='defeatLetter' key={letter}>{letter}</span>
    });*/
    for (let i = 0; i < answer.length; i++) {
        answerArr.push(<span className='defeatLetter'>{answer[i]}</span>)
    }

    answerArr.push(<span>"</span>)
    answerArr.push(<span>!</span>)

    const victory = "You won!!!"

    if (result === "victory")
        return <div id='victory'>{victory}</div>
    else if (result === "defeat") {
        if (window.matchMedia("(orientation: portrait)").matches)
            return <div id='defeat'>Sorry, you lost...<br/>It was {answerArr}</div>
        else
            return <div id='defeat'>Sorry, you lost...It was {answerArr}</div>
    }
    else
    return (
        <div id='leverReset'>{result}</div>
    )
}

export default Result