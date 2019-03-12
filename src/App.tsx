import React, { Component, EventHandler } from 'react';
import './App.css';
import addToast from './toast';

interface Props {}
interface State {
  message: string;
}

class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  handleTyping: React.ReactEventHandler<HTMLInputElement> = (e) => {
    this.setState({
      message: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="whole-viewport">
        <input type="text" id="message" placeholder="Type a message." onChange={this.handleTyping} value={this.state.message} />
        <input type="button" value="Toast!" onClick={() => addToast(this.state.message)} />
      </div>
    );
  }
}

export default App;
