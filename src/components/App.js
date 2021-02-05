import React from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'



const App = () => {   
       return(
        <div>

            <CountButton incrementBy={5} buttonColor="blue"/>
          {/*  <SearchBar products={[
    'tooth paste',
    'tooth brush',
    'mouth wash',
    'dental floss',
    'mouth guard'
]}/>

<SearchBar products={[
    'bike',
    'mountain bike',
    'soccer',
    
]}/>*/}

        </div>
       )
   }


export default App