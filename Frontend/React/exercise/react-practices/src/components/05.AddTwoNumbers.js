import { useState } from "react";

const AddTwoNumbers = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1 = (event) => {
    setNum1(event.target.value);
  };
  const handleNum2 = (event) => {
    setNum2(event.target.value);
  };
  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };
  return (
    <>
      <div>
        <input value={num1} onChange={handleNum1}></input>
        <br />
        <input value={num2} onChange={handleNum2}></input>
        <br />
        <button onClick={handleAdd}>Add</button>
      </div>
      <h1>{result}</h1>
    </>
  );
};
export default AddTwoNumbers;
