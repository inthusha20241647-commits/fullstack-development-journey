import { useState } from "react";

function ChangeColor() {
  const [colorsts, setColorsts] = useState(false);

  const handleClick = () => {
    setColorsts(!colorsts);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: colorsts ? "red" : "green",
          width: "100px",
          height: "100px",
        }}
      ></div>
      <button onClick={handleClick}>Change Color</button>
    </>
  );
}
export default ChangeColor;
