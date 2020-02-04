import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'


class Login extends React.Component
{
    state={
        email:'',
        password:'',
        display:false,
        data:"i am sankhadip",
        show:false,
        color:'red'
    }
    updateEmail=(e)=>
    {
        this.setState({
            email:e.target.value
        })
    }
    updatePassword=(e)=>
    {
        e.preventDefault();
        this.setState({
            password:e.target.value
        })
    }

    submit=()=>
    {
        const {email, password}=this.state;
        axios.post("http://localhost:4000/users/login",{ email, password })
        .then((res)=>
        {
            console.log(res);
            if(res.data.code==="200")
            {
                this.props.history.push("/todo");
            }
        })
        .catch((err)=>
        {
            console.log(err);
        })
    }
    toggleShow=()=>
    {
        this.setState({
            show:!this.state.show
        })
    }
    render()
    {
        return(
            <div className="p-3 border-primary border">
                <button onClick={this.toggleShow}>TOGGLE</button>
                <p style={{ display:this.state.show ? "inline" : "none", color:this.state.color }}>It will be toogled</p>
                <fieldset>
                    <legend>Login</legend>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input 
                            onChange={this.updateEmail}
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                            onChange={this.updatePassword} 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password" />
                        </div>
                        <button 
                        onClick={this.submit}
                        className="btn btn-primary">Submit</button>
                </fieldset>
                { this.props.result ? <p>{ this.props.result.data }</p> : <p>No props</p> }
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        result:state
    }
}

export default connect(mapStateToProps)(Login);