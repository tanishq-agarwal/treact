import React from 'react';
import Home from './Home';
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Service from './Pages/Service';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Blog from './Pages/Blog';
import Forgetpassword from './Pages/Forgetpassword';

const App = () => {
  return (
    <>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={AboutUs}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/service' component={Service}></Route>
            <Route exact path='/blog' component={Blog}></Route>
            <Route exact path='/login' component={LogIn}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Route exact path='/forget' component={Forgetpassword}></Route>
            <Redirect to="/" />
          </Switch>
    </>
  )
}

export default App;