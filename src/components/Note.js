import React from "react";

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <div>{this.props.note}</div>
        <button onClick={() => this.props.handleDelete(this.props.note)}>
          X
        </button>
      </div>
    );
  }
}

export default Note;
