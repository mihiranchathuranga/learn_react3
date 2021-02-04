import React from 'react'
import CountButton from './CountButton'

const App = () => {

    const myItem = "item_"
       return(
        <ul>
        <li>item1</li>
        <li>item2</li>
        <li>{myItem}</li>
    </ul>
       )
   }


export default App