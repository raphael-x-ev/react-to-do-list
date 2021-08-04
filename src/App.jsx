import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "./auth/login";
import TodoList from "./components/to-do-list";
import ProtectedRoute from "./auth/ProtectedRoute";

class App extends React.Component {
  render() {
    return (
      // <BrowserRouter path="/">
      //   <div>
      //     <div className="content">
      //       <Switch>
      //         <Route path="/todo" render={(props) => <TodoList {...props} />} />
      //         <Route path="/" render={(props) => <Login {...props} />} />
      //       </Switch>
      //     </div>
      //   </div>
      // </BrowserRouter>

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
