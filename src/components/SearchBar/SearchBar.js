import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = () =>{
const [searchValue,setSearchValue] = useState('the search value')

const handleInputChange = (event) => {
   // alert("Changed")
   setSearchValue(event.target.value) //try to set the value for searchValue
}

   return(
       <div>
           <input type="text" value={searchValue} onChange={handleInputChange}/>{searchValue}
       </div>
   )
}

export default SearchBar
