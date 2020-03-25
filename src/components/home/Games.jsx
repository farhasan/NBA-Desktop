/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import { ipcRenderer } from 'electron';
import { connect } from 'react-redux';

class Games extends React.Component {
  componentDidMount() {
    ipcRenderer.send('requesting nba splash urls', 'sent successfully');
    ipcRenderer.on('sending nba splash urls', (event, arg) => {
      console.log(arg);
    });
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('sending nba splash urls', () => console.log('removed'));
  }

  createCaption(splashUrl) {
    // might move this to main process
    return (
      <div className="splashText">
        <p>Watch Lebron and the Lakers</p>
      </div>
    );
  }

  render() {
    console.log(this.props.splashUrls);
    const splashImages = this.props.splashUrls.map((url, index) => (<img className="splashImage" src={url} alt={`Splash ${index}`} />));
    console.log(splashImages);
    return (
      <div id="games">
        <h2>games</h2>
        {splashImages[0]}
        {this.createCaption(this.props.splashUrls[0])}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    splashUrls: state.splashUrlReducer.defaultSplashUrls,
  };
}

Games.propTypes = {
  splashUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Games);
// export default Games;
