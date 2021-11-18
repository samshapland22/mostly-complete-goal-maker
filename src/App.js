import React from "react";
import "./App.css";
import Lists from "./components/Lists";
import Notes from "./components/Notes";
import Stats from "./components/Stats";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      lists: [],
      listTitleInput: "",
      completedLists: 0,
      uniqueId: 0,
    };
  }

  handleAddList = (event) => {
    event.preventDefault();
    const { lists, listTitleInput, uniqueId } = this.state;
    this.setState({
      lists: [...lists, { title: listTitleInput, id: uniqueId, display: true }],
      listTitleInput: "",
      uniqueId: uniqueId + 1,
    });
  };

  handleChange = (event) => {
    this.setState({
      listTitleInput: event.target.value,
    });
  };

  handleCompleteList = (listToComplete) => {
    const { completedLists, lists } = this.state;
    let listCopy = { ...listToComplete };
    listCopy.display = false;

    let listsCopy = lists.map((list) => {
      if (list.id === listCopy.id) {
        list = listCopy;
      }
      return list;
    });

    this.setState({
      completedLists: completedLists + 1,
      lists: listsCopy,
    });
  };

  render() {
    return (
      <div className="app">
        <NavBar />
        <Stats completedLists={this.state.completedLists} />
        <Notes />
        <Lists
          lists={this.state.lists}
          listTitleInput={this.state.listTitleInput}
          handleChange={this.handleChange}
          handleCompleteList={this.handleCompleteList}
          handleAddList={this.handleAddList}
        />
      </div>
    );
  }
}

export default App;
