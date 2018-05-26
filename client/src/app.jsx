import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>Hello</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

