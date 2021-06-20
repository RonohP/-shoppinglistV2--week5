import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Error from './pages/404page';
import Coming from './pages/Coming';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import State, { AppContext } from './components/state';
import { useContext, useEffect } from 'react';

function App() {
  const context = useContext(AppContext);
  console.log(context)

  useEffect(()=>{}, []);

  return (
    <Router>
      <State>
        <NavBar/>
        <Switch>
          {/* Renders the Main component with / */}
          <Route exact path='/'>
            <Main />
          </Route>
          {/* Renders the Home component with /home */}
          <Route path='/home'>
            <Home />
          </Route>
          {/* Renders the Login component with /login */}
          <Route exact path='/login'>
            <Login />
          </Route>
          {/* Renders the Register component with /register */}
          <Route exact path='/register'>
            <Register />
          </Route>
          {/* Renders the Register component with /register */}
          {/* <Route exact path='/logout'>
            <Home />
          </Route> */}
          {/* Render the Coming Soon Page with /coming */}
          <Route exact path='/coming'>
            <Coming />
          </Route>
          {/* fallback */}
          <Route>
            <Error />
          </Route>
        </Switch>
      </State>
    </Router>
  );
}

export default App;
