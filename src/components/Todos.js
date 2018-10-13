import React from "react"

const Todos = ({todos,removeTodo})=>{
    const todoList=todos.length?(
    todos.map(todo=>{
        return(
        <div className="collection-item" key={todo.id}>
            <span>{todo.content}</span>
            <button className="btn" onClick={()=>{removeTodo(todo.id)}}>Delete</button>
            </div>
        )
    })
    ):(
    <p className="center">You have no todos left</p>
    )
    return(
    <div className="todos-collection">
        {todoList}
        </div>
    )
}

export default Todos