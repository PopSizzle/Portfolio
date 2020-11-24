import logo from './logo.svg';
import './App.css';
import About from './pages/about'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = '/' component={About} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
