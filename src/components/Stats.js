import React from "react";

class Stats extends React.Component {
  render() {
    // let percentComplete =
    //   Math.round(
    //     (100 * this.props.totalCompletedItems) / this.props.totalItems
    //   ) || 0;

    console.log(this.props);
    return (
      <div className="stats">
        <div>Total Completed Lists: {this.props.completedLists}</div>
      </div>
    );
  }
}

export default Stats;
