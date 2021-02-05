import React,{useState, useEffect } from 'react'
import './CountButton.css'

const CountButton = (props) => {
    console.log(props.incrementBy)


    const [currentCount , setCurrentCount] = useState(0)
   

    const handleClick = () =>{
        setCurrentCount(currentCount + props.incrementBy)
    }

    useEffect(() => {
        console.log("use effect called")
    }, [currentCount])

    return (<div>
        <button onClick={handleClick} >+{props.incrementBy}</button>
        <div className="count-display">{currentCount}</div>
    </div>)
}

export default CountButton