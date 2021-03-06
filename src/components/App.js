import React, {useEffect,useState} from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'



const App = () => {  
    
    //storing the value inside the "state" of the Component

    const[productState,setProductState] = useState([])

    useEffect( () => {
      setTimeout(() => {setProductState ([
          "tooth paste",
          "tooth brush",
          "mouth wash",
          "dental floss",
          "mouth guard"
      ])} , 2000)
    }, [])

    const hasProducts = productState.length > 0

       return(
        <div>

           {/*<CountButton incrementBy={5} buttonColor="blue"/>*/}
          {hasProducts ? <SearchBar products={productState}/> : "Loading"}
        </div>
       )
   }


export default App