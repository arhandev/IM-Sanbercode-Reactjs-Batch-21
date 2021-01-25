import React, { Component } from 'react'

class Timer extends Component {

    componentWillUnmount(){
        console.log("hehe123")
        clearInterval(this.props.TimerCount)
        clearInterval(this.props.waktuCount)
      }

    render() {
        return (
            <div>
                <h1> Sekarang jam {this.props.waktu}</h1>

                <h1>{this.props.Time}</h1>

            </div>
        )
    }
}

export default Timer
