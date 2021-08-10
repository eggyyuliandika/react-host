import "./App.css";
import React, { Component } from "react";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      items: [],
      sub: "",
      subItems: [],
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

  handleClick = (event) => {
    this.setState({
      sub: [...this.state.sub, this.state.subItems],
      subItems: "",
    });
  };

  handleAdd = (event) => {
    this.setState({
      subItems: event.target.value,
    });
  };

  handleDelete = (event) => {
    event.preventDefault();
    this.setState({
      items: [],
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
            placeholder="Add your to-do"
          />
          <button>Add</button>
        </form>

        <form>
          <button onClick={this.handleDelete}>Delete All</button>
        </form>

        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
