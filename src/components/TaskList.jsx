import "./../styles/TaskList.css";
import React, { useState } from "react";

const TaskList = (props) => {

  const [ check, setCheck ] = useState(false);

  const handleChecked = () => {
    setCheck(!check);
  }

  return (
    <>
      <div className="tasklist" >
        <input className="taskchek" type="checkbox" onChange={handleChecked} />
        <h3 className="taskitem" >{props.item}</h3>
        { check ? <h3 className="taskcheklabel" >"Complete"</h3> : <h3 >{''}</h3> }
      </div>
    </>
  )
}

export default TaskList