import React from 'react';
import Titlebar from './components/Titlebar';
import Navbar from './components/Navbar';

import Home from './components/home/Home';
import Teams from './components/teams/Teams';
import Players from './components/players/Players';
import { HashRouter, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div id="fullWindow">
          <Titlebar />
          <div id="container">
            <Navbar />
            <Switch>
              <Route exact path="/teams" component={Teams} />
              <Route exact path="/players" component={Players} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
