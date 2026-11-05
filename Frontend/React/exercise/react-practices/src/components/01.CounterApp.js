import { useState } from "react"
function CounterApp(){
    const [count,setCount]=useState(0)
    

    function Inc(){
        setCount(count+1)

    }
    function Dec(){
        setCount(count-1)
        
    }
    
    return(
        <>
        <h1>{count}</h1>
        <button onClick={Inc}>Increment</button>
        <button onClick={Dec}>Decrement</button>
        </>
    )
}
export default CounterApp;