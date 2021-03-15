import React,{useState, useRef, useEffect} from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
const   LOCAL_STORAGE_KEY = 'todoApp.todos'
const App = () => {
    const todoNameRef = useRef()
    const [todos, setTodos] = useState([])
    

    const toggleTodo = (id)=>{
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }
    const handleClearTodos=()=> {
       const newTodos = todos.filter(todo => !todo.complete)
       setTodos(newTodos)
    }
    const handleToDo=(e)=>{
        const name = todoNameRef.current.value
        if(name === '') return 
        setTodos(prevTodos=>{
            return [...prevTodos,{id:uuidv4(),name:name,complete:false}]
        })
        todoNameRef.current.value = null
    }
    const ddd = () => handleClearTodos
    useEffect(()=>{

        const storedTodos= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
    }, [todos])
    
    return (
        <>
            <TodoList todos = {todos} toggleTodo = {toggleTodo}/>
            <input ref={todoNameRef} type="text" />
            <button onClick={handleToDo}>Add ToDo</button>
            <button onClick={handleClearTodos}> Clear Completed Todo</button>
            <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        </>
    )
}

export default App
