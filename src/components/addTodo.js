import React,{useState} from "react";   
function AddToDo({toDo,setTodo}){

  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setTodo([...toDo, newEntry]);
      setNewTask("");
    }
  };
    return(

       <div className="add ">
          <input
            type="text"
            placeholder="Enter a Todo..."
            className="task-input"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="button-add" onClick={addTask} type="submit">
            Add
          </button>
        </div>
    )
}
export default AddToDo