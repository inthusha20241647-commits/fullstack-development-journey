import { useState } from "react";

function TwoInputForm() {
  const [result, setResult] = useState("");
  const [fname, setFname] = useState("Agnel");
  const [lname, setLname] = useState("John");

  function handleFname(event) {
    setFname(event.target.value);
  }
  function handleLname(event) {
    setLname(event.target.value);
  }
  function handleAdd() {
    setResult(fname + " " + lname);
  }
  return (
    <>
      <div>
        <input value={fname} onChange={handleFname}></input>
        <input value={lname} onChange={handleLname}></input>
        <button onClick={handleAdd}>Display</button>
      </div>
      <h1>{result}</h1>
    </>
  );
}
export default TwoInputForm;
