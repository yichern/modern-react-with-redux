import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return <div>Hi there!</div>;
// };

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div> Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
