import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleValue = e => {
    const { value } = e.target;
    const { name, handler } = this.props;
    this.setState({ value }, () => handler(value, name));
  };

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;
    return (
      <div>
        <input
          onChange={this.handleValue}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
}

export default Input;
