import '../styles/App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Employees from './Employees.js';

function App() {
  return (
    <Router>
      <div className="app-header">
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/employees">Employees</Link>
            </li>
          </ul>
        </nav>

        <Switch>
            <Route path="/employees">
              <Employees/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;