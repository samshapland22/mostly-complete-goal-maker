import React from "react";

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      itemInput: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      itemInput: event.target.value,
    });
  };

  handleItemSubmit = (event) => {
    event.preventDefault();
    const { items, itemInput } = this.state;
    this.setState({
      items: [...items, { name: itemInput, isComplete: false }],
      itemInput: "",
    });
  };

  handleIsComplete = (givenIndex) => {
    //we need to make a copy of the item object being clicked on AND the array of items kept in state.
    //this is because we NEVER want to modify anything in state directly, not even nested objects, and
    //the spread operator only makes shallow copies of arrays. look up "shallow copy spread operator javascript" for more info.

    //make a copy of the item being clicked, then toggle its "isComplete" key
    let currentItemCopy = { ...this.state.items[givenIndex] };
    currentItemCopy.isComplete = !currentItemCopy.isComplete;

    //make a copy of this.state.items, then update the item being clicked to reflect its new "isComplete" status
    let arrCopy = [...this.state.items];
    arrCopy[givenIndex] = currentItemCopy;

    //replace the previous items array with the newly updated copy
    this.setState({
      items: arrCopy,
    });
  };

  render() {
    let itemsToDisplay = this.state.items.map((item, i) => {
      return (
        <li
          key={item + i}
          onClick={() => this.handleIsComplete(i)}
          style={{ textDecoration: item.isComplete ? "line-through" : "none" }}
        >
          {item.name}
        </li>
      );
    });

    const allowListComplete =
      this.state.items.length &&
      this.state.items.every((item) => item.isComplete === true);

    return (
      <div
        className="list"
        style={{ display: this.props.list.display ? "block" : "none" }}
      >
        <h4>{this.props.list.title}</h4>
        <form onSubmit={this.handleItemSubmit}>
          <input
            type="text"
            value={this.state.itemInput}
            onChange={this.handleChange}
          />
          <button className="small-button">Add item</button>
        </form>
        <ul>{itemsToDisplay}</ul>
        <button
          className={
            allowListComplete ? "complete-button" : "incomplete-button"
          }
          disabled={!allowListComplete}
          onClick={() => this.props.handleCompleteList(this.props.list)}
        >
          List complete
        </button>
      </div>
    );
  }
}

export default List;
