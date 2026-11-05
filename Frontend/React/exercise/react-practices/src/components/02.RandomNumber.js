import { useState } from "react"

function RandomNumber(){
    const[randomnumber,setRandomNumber]=useState(0)

    function Generate(){
        const randomNumber=(Math.floor(Math.random()*10)+1)
        setRandomNumber(randomNumber)
    }

    return(
        <div>
            <h1>{randomnumber}</h1>
            <button onClick={Generate}>Generate Random Number</button>
        </div>

    )
}
export default RandomNumber