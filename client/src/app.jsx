import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  searchBarClick = (q) => {
    fetch('http://127.0.0.1:3000/server',{
      method: 'POST',
      body: q,
      headers:{
        'content-type': 'text/plain',
      }
    }).then(res => res.json())
      .catch(error => console.log('we errored somewhere :('))
      .then(res => console.log(res))
  }

  render(){
    return(
      <div className='holder'>
        <SearchBar click={this.searchBarClick} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

