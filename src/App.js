import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo';
import About from './components/About'

export class App extends Component {
  state = {
    todos : [
      {
        id: 1,
        title: 'wash the plate',
        completed: false
      },
      {
        id: 2,
        title: 'debug my code',
        completed: false
      },
      {
        id: 3,
        title: 'go for service',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delTodo =(id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <Router>
      <div className='App'>
        <Header />
        <Route exact path='/' render={props => (
          <React.Fragment>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        )} />
        <Route path='/about'  component={About}/>
      </div>
      </Router>
    )
  }
}

export default App
