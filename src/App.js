import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/gallery' component={withRouter(Gallery)} exact />
      </Switch>
    </Router>
  );
}

export default App;
