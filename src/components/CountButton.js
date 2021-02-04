import React from 'react'


const CountButton = () => {
    const currentCount = 0
    return <div>
        <button>+1</button>
        <div>{currentCount}</div>
    </div>
}

export default CountButton