// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component{
  constructor(){
    super();
    
  }
  
   handleClick = () => {
    this.setState ({
      
    })
  }
  
  render () {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      )
  }
}