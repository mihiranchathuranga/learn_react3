import React, {useEffect} from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'



const App = () => {   

    useEffect( () => {

    }, [])
       return(
        <div>

           {/*<CountButton incrementBy={5} buttonColor="blue"/>*/}
          <SearchBar products={[
    'tooth paste',
    'tooth brush',
    'mouth wash',
    'dental floss',
    'mouth guard'
]}/>



        </div>
       )
   }


export default App