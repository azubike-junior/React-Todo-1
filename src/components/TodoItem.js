import React, { Component } from 'react'
import propTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            borderBottom: '3px, #f4f4f4 dotted',
            backgroundColor: '#000',
            color: '#ccc',
            padding: '5px 10px',
            margin: '2px 2px'
        }
    }

    render() {
        const {id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                 <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                  <button style={btn} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

const btn = {
    borderRadius: '50%',
    float: 'right',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px',
    cursor: 'pointer'
}

TodoItem.propTypes  = {
    todo: propTypes.object.isRequired
}
export default TodoItem
