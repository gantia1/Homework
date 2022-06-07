import React from 'react';

class Timer extends React.Component {

    state = {
        sec: 0,
        min: 2,
        hour: 1,

    };

    start = () => {
        this.interval = setInterval(() => {
            this.setState({
                sec: this.state.sec === 0 ? 60 : this.state.sec - 1,
                min: this.state.sec === 60 && this.state.min > 0 ? this.state.min - 1 : this.state.min,
            })
            if (this.state.min === 0 && this.state.hour > 0) {
                this.setState({
                    hour: this.state.min === 0 && this.state.hour > 0 ? this.state.hour - 1 : this.state.hour,
                    min: 59,
                })
            }
            if (this.state.hour === 0 && this.state.min === 0 && this.state.sec === 0) {
                clearInterval(this.interval);
                this.setState({
                    sec: 0,
                    min: 0,
                    hour: 0,
                })
            }
        }, 1000);
    }

    stop = () => {
        clearInterval(this.interval);
    }

    reset = () => {
        clearInterval(this.interval);
        this.setState({
            sec: 0,
            min: 2,
            hour: 0,
        })
    }

    render() {
        return (
            <div style={{ padding: 10 }}>
                <h2>
                    {this.state.hour < 10 ? '0' + this.state.hour : this.state.hour}:
                    {this.state.min < 10 ? '0' + this.state.min : this.state.min}:
                    {this.state.sec < 10 ? '0' + this.state.sec : this.state.sec}
                </h2>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }

}

export default Timer;