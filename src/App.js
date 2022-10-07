import React,{useState} from 'react';
import Header from './components/Header';
import './App.css';
import TodoList from "./components/TodoList"
import Form from './components/form';

const App = ()=> {
const [input,setInput]=useState("");
const [todos,setTodos]=useState([]);
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form

          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          />
        </div>
        <div>
          <TodoList 
          todos={todos}
          setTodos={setTodos}
          />
        </div>
      </div>
     
    </div>
  );
}

export default App;
