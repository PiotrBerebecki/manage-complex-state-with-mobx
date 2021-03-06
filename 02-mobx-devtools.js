const { observable } = mobx;
const { observer } = mobxReact;
const { Component } = React;
const Devtools = mobxDevtools.default;

const appState = observable({
  count: 0,
});
appState.increment = function() {
  this.count++;
};
appState.decrement = function() {
  this.count--;
  console.log('hoi');
};

@observer
class Counter extends Component {
  render() {
    return (
      <div>
        <Devtools />
        Counter: {this.props.store.count} <br />
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    );
  }

  handleInc = () => {
    this.props.store.increment();
  };

  handleDec = () => {
    this.props.store.decrement();
  };
}

ReactDOM.render(<Counter store={appState} />, document.getElementById('app'));
