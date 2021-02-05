import React,{useState} from 'react'

const CountButton = () => {
    let currentCount = 0

    const handleClick = () =>{
        currentCount++
        console.log(currentCount)
    }

    return <div>
        <button onClick={handleClick}>
            +1</button>
        <div>{currentCount}</div>
    </div>
}

export default CountButton