import React from 'react'



const CountButton = () => {
    const currentCount = 1
    return <div>
        <button onClick={() =>
          alert("Clicked")
        }>
            +1</button>
        <div>{currentCount}</div>
    </div>
}

export default CountButton