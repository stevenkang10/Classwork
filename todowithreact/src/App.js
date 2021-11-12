import React from 'react'
import TodoList from './components/todoList';
import TodoInput from './components/todoInput';


class App extends React.Component {
  constructor(props){
    super(props)
    //state is immutable, but it is overwritable
    this.state  =  {
      todos: [
        {id: 1, description:"call mom"}, 
        {id: 2, description:"buy flowers"}
       
      ], 
      todoInput: ""
    }
  }

  handleChange = (text) => {
    this.setState({
      todoInput: text
    })

  }

  addTodo = () => {
    let newTodo = {id: Date.now(), description: this.state.todoInput}
    if(this.state.todoInput){
        this.setState({
          todos: [...this.state.todos, newTodo],
          todoInput: ""
        })
     }
  }

  //runs many times, if shadow dom changes
  render (){
    return(
      <div className="App">
        <h1>The Todo App</h1>
        <TodoInput 
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          todoInputValue={this.state.todoInput}
        />
        <TodoList 
          todos={this.state.todos}
S
          />
      </div>
    )
  }
}

// const App = () => {
//   return(
//     <div className="App">
//       <h1>My Todo App</h1>
//       <TodoInput />
//       <TodoList todos={todos} />
//     </div>
//   )
// }

export default App;
