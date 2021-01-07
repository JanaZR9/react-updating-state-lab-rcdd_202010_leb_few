// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component{
  constructor(){
    super();
    
    this.state = {
  errors: [],
  user: null,
  settings: {
  bitrate: 8,
  video: {
  resolution: '1080p'
    }
  }
}
    
  }
  
   handleClick = () => {
    this.setState ({
      settings:{
        bitrate:12
      }
    })
  }
  
  handleClick2 = () => {
    this.setState ({
      settings:{
        video:{
          resolution:'720p'
        }
      }
    })
  }
  
  render () {
    return (
      <button className="bitrate" onClick={this.handleClick}>click</button>
       <button className="resolution" onClick={this.handleClick2}>click again</button>
      )
  }
}