import React from 'react';
import './App.scss';
import  {BrowserRouter,Switch,Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import Profile from './Components/Profile/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
      </Switch>
      <Switch>
        <Route  path='/register' component={Register}/>
      </Switch>
      <Switch>
        <Route  path='/home' component={Home}/>
      </Switch>
      <Switch>
        <Route  path='/signin' component={SignIn}/>
      </Switch>
      <Switch>
        <Route  path='/profile' component={Profile} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
