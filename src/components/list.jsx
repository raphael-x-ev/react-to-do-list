import React from "react";

export default class List extends React.Component {
  render() {
    return (
      <div>
        <table className="table table-striped border-bottom">
          <thead>
            <tr>
              <th scope="col">To Do</th>
              <th scope="col">Date Added</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((name) => (
              <tr key={name}>
                <td>{name}</td>
                <td></td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.props.onRemoveToDo(name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
