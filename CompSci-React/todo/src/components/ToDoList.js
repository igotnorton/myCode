import React from "react";
import ToDo from "./Todo";

const ToDoList = ({todoList, toggleCompleted, todoFilter}) => {
    return (
        <div>
            {todoList.map(todo => {
                return (
                    <ToDo todo={todo} toggleCompleted={toggleCompleted} todoFilter={todoFilter}/>
                )})
            }
            <button className="clearBtn" onClick={todoFilter}>Clear</button>
        </div>
    );
};

export default ToDoList;