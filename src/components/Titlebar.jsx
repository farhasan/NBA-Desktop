import React from 'react';

const { remote } = require('electron');

function minimize(e) {
  e.preventDefault();
  remote.getCurrentWindow().minimize();
}

function maximize(e) {
  e.preventDefault();
  if (!remote.getCurrentWindow().isMaximized()) remote.getCurrentWindow().maximize();
  else remote.getCurrentWindow().unmaximize();
}

function close(e) {
  e.preventDefault();
  remote.getCurrentWindow().close();
}

export default class Titlebar extends React.Component {
  render() {
    return (
      <div id="titleBar">
        <div id="windowButtons">
          <button id="minimize" onClick={minimize}>—</button>
          <button id="maximize" onClick={maximize}>▢</button>
          <button id="close" onClick={close}>X</button>
        </div>
      </div>
    );
  }
}
