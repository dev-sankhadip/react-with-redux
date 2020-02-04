import React from 'react'
import { connect } from 'react-redux'



class UserLIst extends React.Component
{
    render()
    {
        const users=this.props.state.todos.users.length!==0 ? this.props.state.todos.users.map((item, index)=>
        {
            return(
                <div key={index}>
                    <p>{ item.id }</p>
                    <p>{ item.name }</p>
                    <p>{ item.email }</p>
                </div>
            )
        }) : <p>No users</p>
        return(
            <div>
                {users}
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

export default connect(mapStateToProps)(UserLIst);