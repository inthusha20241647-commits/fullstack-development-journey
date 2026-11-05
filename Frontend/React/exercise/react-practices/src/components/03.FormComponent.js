import { useState } from "react";

function FormComponent() {
  const [myname, setMyname] = useState("Inthusha");

  function handleChange(event) {
    setMyname(event.target.value);
  }
  return (
    <>
      <form>
        <input value={myname} onChange={handleChange}></input>
      </form>
    </>
  );
}
export default FormComponent;
