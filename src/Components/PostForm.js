import React, { Component } from "react";
import Input from "./Input";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { values: { title: "", text: "" } };
  }

  handleValue = (value, name) => {
    const { values } = this.state;
    this.setState({
      values: {
        ...values,
        [name]: value
      }
    });
  };

  render() {
    const { values } = this.state;
    const { submit } = this.props;
    return (
      <div>
        <Input name="title" handler={this.handleValue} placeholder="Title" />
        <Input name="text" handler={this.handleValue} placeholder="Message" />
        <button onClick={() => submit(values)}>Send</button>
      </div>
    );
  }
}

export default PostForm;
