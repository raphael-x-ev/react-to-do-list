import React from "react";
import List from "./list";

export default class Notes extends React.Component {
  state = {
    todoList: [
      { name: "Learn React", date: "8/5/2021, 7:19:01 PM" },
      { name: "Eat Breakfast", date: "8/5/2021, 7:29:01 PM" },
      { name: "Be a Rockstar Developer", date: "8/5/2021, 7:35:00 PM" },
    ],
    input: "",
    //initial state
  };

  //this bind
  handleRemoveToDo = this.handleRemoveToDo.bind(this);
  updateInput = this.updateInput.bind(this);
  handleAddToDo = this.handleAddToDo.bind(this);

  //Methods
  handleAddToDo() {
    const obj = {
      name: this.state.input,
      date: new Date().toLocaleString() + "",
    };
    let nameListArray = [];

    this.setState((currentState) => {
      Object.values(currentState.todoList).forEach((value) => {
        nameListArray.push(value.name);
      });

      if (!nameListArray.includes(this.state.input)) {
        return {
          todoList: currentState.todoList.concat(obj),
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
        todoList: currentState.todoList.filter((todo) => todo.name !== name),
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
