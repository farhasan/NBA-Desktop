import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Titlebar from './components/Titlebar';
import Navbar from './components/Navbar';

import Home from './components/home/Home';
import Teams from './components/teams/Teams';
import Players from './components/players/Players';

import combineReducers from './reducers/rootReducer';

const store = createStore(combineReducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
