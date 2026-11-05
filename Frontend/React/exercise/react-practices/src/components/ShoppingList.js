import { useState } from "react";

const ShoppingList=()=>{
    const [myList,setMyList]=useState(["Tomato","Egg","Milk"])
    const [items,setItems]=useState("")

  const handleAdd=()=>{
    setMyList([...myList,items])
    setItems("")
  }

  const handleChange=(event)=>{
    setItems(event.target.value)
  }
    return(
        <>
        <input value={items} onChange={handleChange}></input>
        <button onClick={handleAdd}>Add</button>
        <ul>
            {
                myList.map(function(item){
                    return <li>{item}</li>
                })
            }
        </ul>
        </>

    )
}



export default ShoppingList;
