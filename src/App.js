import React, {Component} from 'react';

import './App.css';
import Drumpad from './Drumpad/Drumpad';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //markdown: initialState

    };
    //this.handleChange = this.handleChange.bind(this)
  }



render(){
  return (
    <div className="App"  id="drum-machine">
  <div id="display">

<Drumpad/>
</div>
    </div>
  );

  }
}

export default App;
