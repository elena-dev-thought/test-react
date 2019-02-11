import React from 'react';
import './index.css';

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {/* bind the variable value in in the button template
         set state is automatically updating the child components too  */}
        {this.state.value}
      </button>
    );
  }
}
