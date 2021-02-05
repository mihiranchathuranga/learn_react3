import React from 'react'
import './SearchBar.css'

const SearchBar = () =>{
const searchValue = "the search value"

   return(
       <div>
           <input type="text" value={searchValue}/>
       </div>
   )
}

export default SearchBar
