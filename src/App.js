import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss';

import ChooseGame from './Scenes/ChooseGame';
import WriteGame from './Scenes/WriteGame';
import LinkGame from './Scenes/LinkGame';
import News from './Scenes/News';

import NotFound from './Scenes/NotFound';

const App = () =>
  <Router>
    <div>
      <nav>
        <ul className="nav-container">
          <li >
            <Link to="/" className="nav-item">News</Link>
          </li>
          <li >
            <Link to="/choose-game" className="nav-item">Choose Game</Link>
          </li>
          <li>
            <Link to="/link-game" className="nav-item">Link Game</Link>
          </li>
          <li>
            <Link to="/write-game" className="nav-item">Write Game</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/choose-game" component={ChooseGame} />
        <Route exact path="/link-game" component={LinkGame} />
        <Route exact path="/write-game" component={WriteGame} />
        <Route exact path="/" component={News} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>

export default App;
