import React, {useState} from 'react'
import './SearchBar.css'

const products = [
    'tooth paste',
    'tooth brush',
    'mouth wash',
    'dental floss',
    'mouth guard'
]

const SearchBar = () =>{
const [searchValue,setSearchValue] = useState('')

const handleInputChange = (event) => {
   // alert("Changed")
   console.log(event)
   setSearchValue(event.target.value) //try to set the value for searchValue
}

    const handleClearClick = () => {
           setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length > 0

   

   return(
       <div>
           <input type="text" value={searchValue} onChange={handleInputChange}/>     
           {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
       </div>
   )
}

export default SearchBar

//how to do the conditional rendering
//assume that we want to show that clear button if only input field include some value only
// {} these are used for interpolation