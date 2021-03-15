import React from 'react'

export default function Todo( {todo,toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
        <div>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            <label  style={{color: "red",width:'500px'}}>{todo.name}</label>
        </div>
    )
}
