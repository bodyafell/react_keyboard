import React from 'react';

type State = {
  lastKey: string;
  active: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastKey: '',
    active: false,
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ active: true });
    this.setState({ lastKey: `[${event.key}]` });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.active
            ? `The last pressed key is ${this.state.lastKey}`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
