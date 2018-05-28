'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'App' },
                React.createElement(StopWatch, null)
            );
        }
    }]);

    return App;
}(React.Component);

;

var StopWatch = function (_React$Component2) {
    _inherits(StopWatch, _React$Component2);

    function StopWatch(props) {
        _classCallCheck(this, StopWatch);

        var _this2 = _possibleConstructorReturn(this, (StopWatch.__proto__ || Object.getPrototypeOf(StopWatch)).call(this, props));

        _this2.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        };
        _this2.handleStartClick = _this2.handleStartClick.bind(_this2);
        _this2.handleStopClick = _this2.handleStopClick.bind(_this2);
        _this2.handleResetClick = _this2.handleResetClick.bind(_this2);
        return _this2;
    }

    _createClass(StopWatch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'main' },
                React.createElement(
                    'nav',
                    { className: 'controls' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'start', onClick: this.handleStartClick },
                        'start'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'stop', onClick: this.handleStopClick },
                        'stop'
                    )
                ),
                React.createElement(
                    'nav',
                    { className: 'controls' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'reset', onClick: this.handleResetClick },
                        'reset'
                    )
                )
            );
        }
    }, {
        key: 'handleResetClick',
        value: function handleResetClick() {
            this.setState({
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            });
            this.print();
        }
    }, {
        key: 'print',
        value: function print() {
            this.props.innerText = this.format();
        }
    }, {
        key: 'format',
        value: function format() {
            var minutes = this.state.times.minutes;
            var seconds = this.state.times.seconds;
            var miliseconds = this.state.times.miliseconds;
            return this.pad0(minutes) + ':' + this.pad0(seconds) + ':' + this.pad0(Math.floor(miliseconds));
        }
    }, {
        key: 'handleStartClick',
        value: function handleStartClick() {
            var _this3 = this;

            if (!this.state.running) {
                this.state.running = true;
                this.watch = setInterval(function () {
                    return _this3.step();
                }, 10);
            }
        }
    }, {
        key: 'step',
        value: function step() {
            if (!this.state.running) return;
            this.calculate();
            this.print();
        }
    }, {
        key: 'calculate',
        value: function calculate() {
            this.times.miliseconds += 1;
            if (this.times.miliseconds >= 100) {
                this.times.seconds += 1;
                this.times.miliseconds = 0;
            }
            if (this.times.seconds >= 60) {
                this.times.minutes += 1;
                this.times.seconds = 0;
            }
        }
    }, {
        key: 'handleStopClick',
        value: function handleStopClick() {
            this.setState({
                running: false
            });
            clearInterval(this.watch);
        }
    }, {
        key: 'pad0',
        value: function pad0(value) {
            var result = value.toString();
            if (result.length < 2) {
                result = '0' + result;
            }
            return result;
        }
    }]);

    return StopWatch;
}(React.Component);

var app = React.createElement(App, null);
ReactDOM.render(app, document.getElementById('app'));
