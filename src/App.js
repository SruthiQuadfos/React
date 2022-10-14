import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddToDo from "./components/addTodo";
import Todolist from "./components/TodoList"
function App() {
  //////////////////Todolist State////////////////////////
 const [toDo, setTodo] = useState([]);

 
  
 
  return (
    <div className="container App">
      <div className="app-wrapper">
        <div className="header">
          <h1>To-do List</h1>
        </div>

        {/*////////////////////////// {Add task} ////////////////////////*/}

        <AddToDo 
        toDo={toDo}
        setTodo={setTodo}
        />

       

        {/*/////////////////////////// {Display ToDo}  /////////////////////*/}
        <Todolist
          toDo={toDo}
          setTodo={setTodo}
        />
        
      </div>
    </div>
  );
}
export default App;
