import React from "react";
import {
  Router,
  Switch,
  Route,
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "./auth/login";
import TodoList from "./components/to-do-list";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter path="/">
        <div>
          <div className="content">
            <Switch>
              <Route path="/todo" component={TodoList} />
              <Route path="/" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
