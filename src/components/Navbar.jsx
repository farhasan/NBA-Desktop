import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div><h1><a href="#/" id="homeLink">home</a></h1></div>
        <div><h1><a href="#/teams" id="teamsLink">teams</a></h1></div>
        <div><h1><a href="#/players" id="playersLink">players</a></h1></div>
      </nav>
    );
  }
}
