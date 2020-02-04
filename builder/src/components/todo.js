import React from 'react'
import TodoList from './TodoList'
import { addTodo } from '../actions/action'


class Todo extends React.Component
{
    state={
        title:'',
        des:''
    }

    updateTodo=(e)=>
    {
        this.setState({
            des:e.target.value
        })
    }

    updateTodoTitle=(e)=>
    {
        this.setState({
            title:e.target.value
        })
    }
    submit=()=>
    {
        addTodo(this.state);
    }
    render()
    {
        return(
            <div className="p-3 border-primary border">
                <React.Fragment>
                    <div className="form-group">
                            <label htmlFor="todo_title">Email address</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="todo_title"  
                            placeholder="Enter todo title"
                            onChange={this.updateTodoTitle}
                            />
                        </div>
                    <div className="form-group">
                        <label htmlFor="todo">Password</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="todo" 
                        placeholder="Enter todo" 
                        onChange={this.updateTodo}
                        />
                    </div>
                    <button 
                    onClick={this.submit}
                    className="btn btn-primary">Submit</button>
                </React.Fragment>
                <TodoList/>
            </div>
        )
    }
}

export default Todo;