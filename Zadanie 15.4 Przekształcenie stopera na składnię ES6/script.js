
class App extends React.Component {
    render() {
        return (
            <div className = {'App'}>
            <StopWatch />
            </div>
        )
    }
};

class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
        };
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleStopClick = this.handleStopClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    render() {
        return (
            <div className = {'main'}>
                <nav className = {'controls'}>
                    <a href = {'#'} className = {'button'} id = {'start'} onClick = {this.handleStartClick}>start</a>
                    <a href = {'#'} className = {'button'} id = {'stop'} onClick = {this.handleStopClick}>stop</a>
                </nav>
                <nav className={'controls'}>
                    <a href = {'#'} className = {'button'} id = {'reset'} onClick = {this.handleResetClick}>reset</a>
                </nav>
            </div>
            )
        }

    handleResetClick () {
        this.setState ({
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        });
        this.print();
    }
    print () {
        this.props.innerText = this.format();
    }

    format () {
        let minutes = this.state.times.minutes;
        let seconds = this.state.times.seconds;
        let miliseconds = this.state.times.miliseconds;
        return `${this.pad0(minutes)}:${this.pad0(seconds)}:${this.pad0(Math.floor(miliseconds))}`
    }

    handleStartClick () {
        if (!this.state.running) {
            this.state.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step () {
        if (!this.state.running) return;
            this.calculate();
            this.print();
        }

    calculate () {
        this.times.miliseconds +=1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds +=1
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }

    handleStopClick () {
        this.setState({
            running: false
        });
        clearInterval(this.watch);
    }

    pad0 (value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    }
}



const app = <App />;
ReactDOM.render(app, document.getElementById('app'));