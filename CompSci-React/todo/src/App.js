import './App.css';
import Header from "./components/Header";
import data from "./data/data.json";
import React, {useState} from 'react';
import ToDoList from './components/ToDoList';
import UserInput from './components/UserInput'

function App() {
  const [todoList, setTodo] = useState(data);

  const toggleCompleted = (id) => {
    let arrayMap = todoList.map(task => {
      return task.id === Number(id) ? {...task, complete: !task.complete} : {...task};
    });
    setTodo(arrayMap);
  };

  const todoFilter = () => {
    let filterMap = todoList.filter(task => {
      return !task.complete;
    });
    setTodo(filterMap);
  };

  const newItem = (userText) => {
    let fullMap = [...todoList];
    fullMap = [...fullMap, {id: todoList.length +  1, todo: userText, complete: false} ];
    setTodo(fullMap);
  }

  return (
    <div className="App">
      <Header/>
      <ToDoList todoList={todoList} toggleCompleted={toggleCompleted} todoFilter={todoFilter}/>
      <UserInput newItem={newItem}></UserInput>
    </div>
  );
}

export default App;