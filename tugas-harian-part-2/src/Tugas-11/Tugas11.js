import React, {Component} from 'react'
import './tugas11.css'

class Tugas11 extends Component{
  constructor(props){
    super(props)
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    this.state = {
      waktu: hours + ":" + mins + ":" + secs,
      time: 3,
      checker: true
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    this.start = setInterval(
      () => this.kelola(), 1000);
  }


  componentWillUnmount(){
    clearInterval(this.timerID)
    clearInterval(this.start)
  }

  tick() {
    if(this.state.time <= 1){
      this.setState({
        checker: false
      })
      this.componentWillUnmount()
    }
    else{
      this.setState({
        time: this.state.time - 1 
      });
    }

  }

  kelola() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    console.log("hehe")
    this.setState({
      waktu: hours + ":" + mins + ":" + secs
    })
  }



  render(){
    return(
      <div className="tugas11">
        {this.state.checker && (<>
          <h1>
            Sekarang jam - {this.state.waktu} {this.state.waktu >= 12 ? ("PM.") : ("AM.")}
          </h1>
          <h1>
            hitung Mundur: {this.state.time}
          </h1>
          
        </>)}
      </div>
    )
  }
}

export default Tugas11

