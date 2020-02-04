import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './components/login'
import Home from './components/Home'
import Signup from './components/signup'
import {Provider} from 'react-redux'
import store from './store/store'
import Todo from './components/todo'




export default class App extends React.Component
{
  render()
  {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <div style={{ padding:10 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/todo" component={Todo}  />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}