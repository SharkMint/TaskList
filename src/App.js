import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [ task, setTask ] = useState([]);

  const getItem = (item) => {
    setTask((prevState => {
      return [...prevState, item]
    }))
  }

  return (
    <div className="App">
      <h1 className="title" >Task List</h1>
      <div className="task" >
        <AddTask item={getItem} />
        {task && task.map((task, index) =>  (
          <TaskList id={index} item={task}  />
        )) }
      </div>
    </div>
  )
}

export default App
