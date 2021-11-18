import React from "react";
import Note from "./Note";

class Notes extends React.Component {
  constructor() {
    super();

    this.state = {
      noteList: [],
      noteInput: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      noteInput: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { noteList, noteInput } = this.state;
    this.setState({
      noteList: [...noteList, noteInput],
      noteInput: "",
    });
  };

  handleDelete = (noteToDelete) => {
    let filteredList = this.state.noteList.filter(
      (note) => note !== noteToDelete
    );
    this.setState({
      noteList: filteredList,
    });
  };

  render() {
    let notesToDisplay = this.state.noteList.map((note) => {
      return <Note note={note} handleDelete={this.handleDelete} />;
    });

    return (
      <div className="notes">
        <h2>Notes</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.noteInput} onChange={this.handleChange} />
          <button>Add note</button>
        </form>
        <div className="note-container">{notesToDisplay}</div>
      </div>
    );
  }
}

export default Notes;
