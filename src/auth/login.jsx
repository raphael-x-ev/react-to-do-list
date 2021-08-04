import React, { Component } from "react";
import { FormErrors } from "./formErrors";
import { Router, Switch, Link, Redirect } from "react-router-dom";
import ToDoList from "../components/to-do-list";
import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formErrors: { username: "", password: "" },
      usernameValid: false,
      passwordValid: false,
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "username":
        usernameValid = value.match(/^[a-zA-Z0-9_]{3,10}$/);
        fieldValidationErrors.username = usernameValid ? "" : "Invalid";
        break;
      case "password":
        passwordValid = value.match(/^[^&^$#]+$/);
        fieldValidationErrors.password = passwordValid ? "" : "Invalid";
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      usernameValid: usernameValid,
      passwordValid: passwordValid,
    });
  }

  renderToDoList() {
    // return <ToDoList name={this.state.username} />;
    return <Redirect to="/todo" />;
  }

  authorize(e) {
    let fieldValidationErrors = this.state.formErrors;
    const username = e.target.querySelector('input[name="username"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    const auth = password === "123456" && username === "myaccount";
    fieldValidationErrors.credentials = auth ? "" : "Invalid";
    console.log(auth);
    e.preventDefault();
    this.setState({
      authorized: auth,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form action="#" onSubmit={this.authorize}>
            <h3>Sign In</h3>
            <div className="form-group">
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.username
                )}`}
              >
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleUserInput}
                />
              </div>
            </div>
            <div className="form-group">
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.password
                )}`}
              >
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleUserInput}
                />
              </div>
            </div>
            <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <button
              name="submit"
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.handleUserInput}
            >
              Login
            </button>
          </form>
          {this.state.authorized && this.renderToDoList()}
        </div>
      </div>
    );
  }
}