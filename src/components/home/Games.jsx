import React from 'react';
import { ipcRenderer } from 'electron';

export default class Games extends React.Component {
  componentDidMount() {
    ipcRenderer.send('requesting nba splash urls', 'sent successfully');
    ipcRenderer.on('sending nba splash urls', (event, arg) => {
      console.log(arg);
    });
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('sending nba splash urls', () => console.log('removed'));
  }

  render() {
    return (
      <div id="games">
        <h2>games</h2>
      </div>
    );
  }
}
