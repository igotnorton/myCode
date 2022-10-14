import React from "react";

const ToDo = ({todo, toggleCompleted}) => {
    const handleClick = (e) => {
        e.preventDefault()
        toggleCompleted(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.todo} onClick={handleClick} name="todo" className={todo.complete ? "completed" : "todo"}>
            {todo.todo}
        </div>
    );
};

export default ToDo;