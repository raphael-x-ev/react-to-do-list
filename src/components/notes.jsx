import React from "react";
import List from "./list";

export default class Notes extends React.Component {
  state = {
    todoList: ["Learn ReactJS", "Eat breakfast", "Be a rockstar developer"],
    input: "", //initial state
  };

  //this bind
  handleRemoveToDo = this.handleRemoveToDo.bind(this);
  updateInput = this.updateInput.bind(this);
  handleAddToDo = this.handleAddToDo.bind(this);

  //Methods
  handleAddToDo() {
    this.setState((currentState) => {
      if (!Object.values(currentState.todoList).includes(this.state.input)) {
        return {
          todoList: currentState.todoList.concat([this.state.input]),
          input: "",
        };
      }
      //adds if the value is not yet inside the object
    });
  }

  //handle event = onClick methods
  handleRemoveToDo(name) {
    this.setState((currentState) => {
      return {
        todoList: currentState.todoList.filter((todo) => todo !== name),
      };
    });
  }

  //update inputs (event)
  updateInput(typeEvent) {
    const value = typeEvent.target.value;
    this.setState({
      input: value,
    });
  }

  render() {
    return (
      <div>
        <div id="inputList" className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Add ToDo"
            value={this.state.input}
            onChange={this.updateInput}
          />
          <div className="input-group-prepend">
            <button className="btn btn-primary" onClick={this.handleAddToDo}>
              Add
            </button>
          </div>
        </div>
        <List list={this.state.todoList} onRemoveToDo={this.handleRemoveToDo} />
      </div>
    );
  }
}
