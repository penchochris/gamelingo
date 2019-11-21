import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from './store/store';
import './App.scss';

import QuizScene from './scenes/QuizScene/QuizScene';
import NewsScene from './scenes/NewsScene/NewsScene';
import NotFoundScene from './scenes/NotFoundScene/NotFoundScene';

const App = () =>
  <Provider store={Store}>
    <Router>
      <div className="web-wrapper">
        <nav>
          <ul className="nav-container">
            <li >
              <Link to="/" className="nav-item">News</Link>
            </li>
            <li >
              <Link to="/quiz-game" className="nav-item">Quiz Game</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/quiz-game" component={QuizScene} />
          <Route exact path="/" component={NewsScene} />
          <Route component={NotFoundScene} />
        </Switch>
      </div>
    </Router>
  </Provider>

export default App;
