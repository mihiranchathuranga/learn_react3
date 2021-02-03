//alert("Hello world");
//console.log(document)
const incrementBtn = document.getElementById("increment-btn")
const countDisplay = document.getElementById("count-display")

/*countDisplay.innerText = "1"
incrementBtn.innerText = "9"*/
let currentCount = 0

incrementBtn.addEventListener('click',() => {
    //alert("You click me")
    currentCount++
    countDisplay.innerText = currentCount

})

const incrementBtn2 = document.getElementById("increment-btn2")
const countDisplay2 = document.getElementById("count-display2")

let currentCount2 = 0

incrementBtn2.addEventListener('click',() => {
    //alert("You click me")
    currentCount2++
    countDisplay2.innerText = currentCount2

})

//console.log(incrementBtn)