import React, { Component } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import PostForm from "./Components/PostForm";
import Message from "./Components/Message";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  handleMessage = data => {
    const { title, text } = data;
    const { messages } = this.state;
    const message = {
      title: title || "Untitled",
      text: text || "Empty message",
      date: moment().format("DD.MM.YYYY hh:mm:ss")
    };
    console.log(message);
    const newMessages = [...messages, message];
    this.setState({ messages: newMessages });
  };

  render() {
    const { messages } = this.state;
    console.log(messages);
    return (
      <div className="App">
        <h1>Recent messages</h1>
        {!messages.length && <p>There are no recent messages...</p>}
        {messages.map(message => (
          <Message key={`${message.date}-${message.title}`} data={message} />
        ))}
        <PostForm submit={this.handleMessage} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
