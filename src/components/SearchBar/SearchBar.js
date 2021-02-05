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

    /*console.log(
        products.map((product) => {
            return product.toUpperCase()
        })
    )*/

    console.log(
        products.filter((product) =>{
            return product.includes("mouth")
        })
    )
    

    const shouldDisplayButton = searchValue.length > 0

   

   return(
       <div>
           <input type="text" value={searchValue} onChange={handleInputChange}/>     
           {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

         <ul>   
        {products.map((product)=> {
            return <li key={product}>{product}</li>
        })}
         </ul>
       </div>
   )
}

export default SearchBar

//how to do the conditional rendering
//assume that we want to show that clear button if only input field include some value only
// {} these are used for interpolation
//key prop use to identify element in the list
