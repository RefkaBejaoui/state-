import "./App.css";
import React, { Component } from "react";
//Person ={ fullName,bio, imgSrc, profession} and a boolean shows.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: { fullName: "refka", bio: "askou", imgSrc: "Happy Birthday to meeeeeee", profession: "DS" },
      shows: true,
      interval : 0,
    };
  this.toggel= function(shows){
this.setState({shows:!shows})
  }  
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ interval: prevState.interval + 0.5 }));
    }, 1000);
  }
  render() {
    return(
    <>
    <button onClick={()=>{this.toggel(this.state.shows)}}>{(this.state.shows)?"hide":"show"}</button>
    {this.state.shows && (
      <>
    <h3>{this.state.person.fullName}</h3>
    <h3>{this.state.person.bio}</h3>
    <h3>{this.state.person.profession}</h3>
    <h1>{this.state.person.imgSrc}</h1>
    </>)}
    {this.state.interval}
    </>
    )
  }
}

export default App;
