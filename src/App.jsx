import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Error from "./pages/404page";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        {/* Renders the Main component with / */}
        {/* <Route exact path='/'>
          <Main />
        </Route> */}
        {/* Renders the Home component with /home */}
        <Route  path='/home'>
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
        <Route exact path='/logout'>
          <Home />
        </Route>
        {/* fallback */}
        <Route>
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
