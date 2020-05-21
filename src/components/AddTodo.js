import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name ]: e.target.value
        })
    }

    onSubmit =(e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display:'flex', margin:'5px'}}>
                <input 
                style={{ flex:'10', padding:'5px',border:'none', outline: 'none'}}
                type='text'
                name='title'
                placeholder='Add Todo....'
                onChange={this.onChange}
                 />
                 <input 
                 style={submitBtn}
                 type='submit'
                 value='submit'
                 />
                 </form>
            </div>
        )
    }
}

const submitBtn = {
    border: 'none',
    padding: '7px',
    flex:'1'
}

export default AddTodo
