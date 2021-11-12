import React from 'react';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map(t =>(
                <li key={t.id}>{t.desription}</li>
            ))}
        </ul>
    )
    
}

export default TodoList;