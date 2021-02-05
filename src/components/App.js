import React, {useEffect,useState} from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'



const App = () => {  
    
    //storing the value inside the "state" of the Component

    const[productState,setProductState] = useState([])

    useEffect( () => {

    }, [])
       return(
        <div>

           {/*<CountButton incrementBy={5} buttonColor="blue"/>*/}
          <SearchBar products={productState}/>



        </div>
       )
   }


export default App