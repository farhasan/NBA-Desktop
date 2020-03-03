import React from 'react';
import { ipcRenderer } from 'electron';

export default class Games extends React.Component {
  componentDidMount() {
    // console.log('hello');
    // ipcRenderer.on('sending pic urls', (event, arg) => {
    //   console.log(event);
    //   console.log(arg);
    // });
    // console.log('goodbye');
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
