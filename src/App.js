import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = '/' component={About} />
          <Route exact path = '/contact' component={Contact} />
          <Route exact path = '/projects' component={Projects } />
          <Route exact path = '/resume' component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
