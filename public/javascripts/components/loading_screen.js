import React from 'react';
import Spinner from './spinner';

const LoadingScreen = React.createClass({

  render() {
    return(
      <div className="loading-screen">
        <Spinner />
      </div>
    );
  }
});

export default LoadingScreen;
