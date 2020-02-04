import React from 'react'
import { connect } from 'react-redux'
import UserLIst from './UserList'
import { deleteTodo } from '../actions/action'


class TodoList extends React.Component
{
    // componentDidUpdate(prevProps, prevState, snapshot)
    // {
    //     console.log(prevProps);
    //     console.log(this.props);
    //     if(this.props.state.todos.todos.length!==prevProps.state.todos.todos.length)
    //     {
    //         console.log("updated");
    //     }
    // }
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log(this.props);
        console.log(nextProps);
        return true;
    }

    delete=()=>
    {
        var id=12;
        this.props.deleteTodo(id);
    }
    render()
    {
        const item=this.props.state.todos.todos.length!==0 ? this.props.state.todos.todos.map((item, index)=>
        {
            return(
                <div key={index}>
                    <p>{ item.title }</p>
                    <p>{ item.des }</p>
                </div>
            )
        }) : <p>No todo</p>
        return(
            <div>
                <button onClick={this.delete}>delete action</button>
                {item}
                <hr/>
                {/* <UserLIst/> */}
            </div>
        )
    }
}


function mapStateToProps(state)
{
    return{
        state
    }
}

function mapDispatchToProps(dispatch)
{
    return{
        deleteTodo:(id)=>dispatch(deleteTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);