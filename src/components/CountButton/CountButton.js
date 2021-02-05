import React,{useState, useEffect } from 'react'
import './CountButton.css'

const CountButton = (props) => {
    console.log(props.incrementBy)


    const [currentCount , setCurrentCount] = useState(0)
   

    const handleClick = () =>{
        setCurrentCount(currentCount + props.incrementBy)
    }

    /*useEffect(() => {
        console.log("only called when component mount")
    }, [])


    useEffect(() => {
        console.log("called when component mounts or the currentCount is updated")
    }, [currentCount])*/

    useEffect(() => {
        if(currentCount === 10){
           setCurrentCount(0)
        }
    },[currentCount])

    return (<div>
        <button onClick={handleClick} >+{props.incrementBy}</button>
        <div className="count-display">{currentCount}</div>
    </div>)
}

export default CountButton


//we can use useEffect() to identify specific value  .... kind things