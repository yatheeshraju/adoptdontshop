import React from 'react';
import './App.scss';
import  {BrowserRouter,Switch,Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
      </Switch>
      <Switch>
        <Route exact path='/register' component={Register}/>
      </Switch>
      <Switch>
        <Route exact path='/home' component={Home}/>
      </Switch>
      <Switch>
        <Route exact path='/signin' component={SignIn}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
