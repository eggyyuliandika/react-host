import "./App.css";
import React, { Component } from "react";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      items: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            value={this.state.todoItem}
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Ketikkan sesuatu..."
          />
          <button>Add</button>
        </form>

        <form>
          <button>Clear</button>
        </form>

        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
