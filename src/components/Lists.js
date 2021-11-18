import React from "react";
import List from "./List";

class Lists extends React.Component {
  render() {
    let listsToDisplay = this.props.lists.map((list, i) => {
      return (
        <List
          key={list.title + i}
          list={list}
          handleCompleteList={this.props.handleCompleteList}
        />
      );
    });

    return (
      <div className="lists">
        <h2>Lists</h2>
        <form onSubmit={this.props.handleAddList}>
          <label>
            {" "}
            New list title:{" "}
            <input
              type="text"
              value={this.props.listTitleInput}
              onChange={this.props.handleChange}
            />
          </label>
          <button>Add list</button>
        </form>
        <div className="list-container">{listsToDisplay}</div>
      </div>
    );
  }
}

export default Lists;
