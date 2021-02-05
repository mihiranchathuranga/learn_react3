import React from 'react'
import './SearchBar.css'

const SearchBar = () =>{
const searchValue = "the search value"

const handleInputChange = () => {
    alert("Changed")
}

   return(
       <div>
           <input type="text" value={searchValue} onChange={handleInputChange}/>
       </div>
   )
}

export default SearchBar
