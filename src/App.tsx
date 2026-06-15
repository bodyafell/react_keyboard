import React from 'react';

type State = {
  pressedKey: string;
  active: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
    active: false,
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ active: true });
    this.setState({ pressedKey: `[${event.key}]` });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.active
            ? `The last pressed key is ${this.state.pressedKey}`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
