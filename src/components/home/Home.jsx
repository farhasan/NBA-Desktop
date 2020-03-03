import React from 'react';
import Games from './Games';
import MyTeams from './MyTeams';
import MyPlayers from './MyPlayers';

export default class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <h1>home</h1>
        <Games />
        <MyTeams />
        <MyPlayers />
      </div>
    );
  }
}
