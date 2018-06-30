
class App extends React.Component {
    render() {
        return (
        <div className = {'App'}>
            <Stopwatch />
        </div>
        )
    }
};

class Stopwatch extends React.Component {
    constructor() {
        super();
        this.state = {
        running: false,
        times: {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        }
    }
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleStopClick = this.handleStopClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
  
    reset() {
        this.setState({
            times: {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
                }
            })
        }

    format(times) {
        return `${this.pad0(this.state.times.minutes)}:${this.pad0(this.state.times.seconds)}:${this.pad0(Math.floor(this.state.times.miliseconds))}`;
    }

    pad0(value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    }

    handleStartClick() {
        if (!this.state.running) {
            this.setState({
                running: true
            })
        this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.state.running) return;
            this.calculate();
    }

    handleStopClick() {
        this.setState({
            running: false
        })
        clearInterval(this.watch);
    }

    handleResetClick() {
        this.handleStopClick();
        this.reset();
    }

    calculate() {
        this.setState({
        times: {
            minutes: this.state.times.minutes,
            seconds: this.state.times.seconds,
            miliseconds: this.state.times.miliseconds + 1
        }
    });

        if(this.state.times.miliseconds >= 100){
            this.setState({
                times: {
                minutes: this.state.times.minutes,
                seconds: this.state.times.seconds + 1,
                miliseconds: 0
                }
            });
        }

        if(this.state.times.seconds >= 60){
            this.setState({
                times: {
                minutes: this.state.times.minutes +1,
                seconds: 0, 
                miliseconds: this.state.times.miliseconds 
                }
            });
        }
    }

    render() {
        return (
        <div className = {'main'}>
            <nav className = {'controls'}>
                <a href = {'#'} className = {'button'} id = {'start'} onClick = {this.handleStartClick}>start</a>
                <a href = {'#'} className = {'button'} id = {'stop'} onClick = {this.handleStopClick}>stop</a>
            </nav>
            <div className = {'counter'}>{this.format()}</div>
            <nav className={'controls'}>
                <a href = {'#'} className = {'button'} id = {'reset'} onClick = {this.handleResetClick}>reset</a>
            </nav>
        </div>
        )
    }
}

const app = <App />;
ReactDOM.render(app, document.getElementById('app'));