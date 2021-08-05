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
            {Object.values(this.props.list).map((value, index) => (
              <tr key={value.name}>
                <td>{value.name}</td>
                <td>{value.date}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.props.onRemoveToDo(value.name)}
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
