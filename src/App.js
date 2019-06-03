import React from 'react';
import './App.css';
import CounterContainer from './CounterContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        <CounterContainer />
      </div>
     );
  }
}
 
export default App;
