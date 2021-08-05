import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "./auth/login";
import TodoList from "./components/to-do-list";
import ProtectedRoute from "./auth/ProtectedRoute";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute exact path="/todo" component={TodoList} />
            <Route path="*" component={() => "404 Page Not Found"} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
