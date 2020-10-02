import React from "react";
import List from "./components/List";
import { Form } from "./components/Form";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }


  addTodoItem = (todo) => {
    todo.id = Math.floor(Math.random() * 100000000000);

    this.setState({
      list: [...this.state.list, todo],
    });
  };

  removeTodoItem = (id) => {
    this.setState({
      list: this.state.list.filter((item) => {
        return item.id !== id;
      }),
    });
  };

  render() {
    return (
      <div className="container center">
        <h1 className="blue-text darken-1"> Todos </h1>
        <List todos={this.state.list} removeTodoItem={this.removeTodoItem} />
        <Form addTodoItem={this.addTodoItem} />
      </div>
    );
  }
}

export default App;
