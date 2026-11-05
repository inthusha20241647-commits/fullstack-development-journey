import { useState } from "react";
const ListItem = (props) => {
  const [check, setCheck] = useState(false);

  const handleChange = () => {
    setCheck(!check);
  };
  return (
    <div>
      <input type="checkbox" onChange={handleChange}></input>
      <span style={{ textDecoration: check ? "line-through" : "none" }}>
        {props.activities}
      </span>
    </div>
  );
};
export default ListItem;
