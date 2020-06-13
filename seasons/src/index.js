import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: '',
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.lat ? (
          <p>Latitude: {this.state.lat}</p>
        ) : (
          <p>Error: {this.state.errorMessage}</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
