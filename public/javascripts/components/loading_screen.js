import React from 'react';
import Spinner from './spinner';

const LoadingScreen = React.createClass({

  render() {
    return(
      <div className="loading-screen loading-screen-js">
        <Spinner />
      </div>
    );
  }
});

export default LoadingScreen;
