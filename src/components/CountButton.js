import React from 'react'

const CountButton = () => {
    const currentCount = 1

    const handleClick = () =>{
        alert("working")
    }

    return <div>
        <button onClick={handleClick}>
            +1</button>
        <div>{currentCount}</div>
    </div>
}

export default CountButton