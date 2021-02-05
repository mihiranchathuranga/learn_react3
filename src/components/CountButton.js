import React,{useState} from 'react'

const CountButton = (props) => {
    console.log(props.incrementBy)


    const [currentCount , setCurrentCount] = useState(0)
   

    const handleClick = () =>{
        setCurrentCount(currentCount + props.incrementBy)
    }

    const divStyle = {
        color: "blue",
        border: "1px solid black",
        borderRadius: "10px",
    }

    return (<div style={divStyle}>
        <button onClick={handleClick} >+{props.incrementBy}</button>
        <div>{currentCount}</div>
    </div>)
}

export default CountButton