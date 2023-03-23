import "./../styles/AddItem.css";
import React, { useState } from "react";

const AddTask = (props) => {

  const [ item, setItem ] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.item(item);
  }
  
  return (
    <>
      <div className="additem" >
        <form method="post" className="formadd" onSubmit={onSubmit} >
          <input 
            className="addtext" 
            type="text" 
            name="item" 
            value={item} 
            placeholder="Enter a new task." 
            onChange={handleChange}  
          />

          <button type="submit" className="addtask" >+</button>
        </form>
      </div>
    </>
  )
}

export default AddTask