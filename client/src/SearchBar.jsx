import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      text:'',
    }
  }

  changeHandler = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  clickHandler = (event) => {
    this.props.click(this.state.text)
  }

  render() {
    return(
      <div className='searchBar'>
      <input type='input' 
          className='search' 
          placeholder='search for pics here!'
          onChange={this.changeHandler}></input>
      <div className='submit'
           onClick={this.clickHandler}>SUBMIT</div>
      </div>
    )
  }
}