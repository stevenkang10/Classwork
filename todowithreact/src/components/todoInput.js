import React from "react";

const TodoInput = (props) => {

const addTodo = (event) => {
    event.preventDefault()
    props.addTodo()

}

// const handleChange = event => {
//     console.log(event.target.value)
// }

    return (
        <form onSubmit={addTodo}>
            <input 
                type="text"
                onChange={(event)=>{props.handleChange(event.target.value)}}
                value={props.todoInputValue}
            />
            <input type="submit" />
        </form>
        
    )
}

export default TodoInput;