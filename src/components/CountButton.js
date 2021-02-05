import React from 'react'

const CountButton = () => {
    let currentCount = 1

    const handleClick = () =>{
        currentCount++
    }

    return <div>
        <button onClick={handleClick}>
            +1</button>
        <div>{currentCount}</div>
    </div>
}

export default CountButton