import React from 'react'
// import axios from 'axios'

export default class Signup extends React.Component
{
    render()
    {
        return(
            <div className="p-3 border border-success">
                <fieldset>
                    <legend>Sign Up</legend>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Email address</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </fieldset>
            </div>
        )
    }
}