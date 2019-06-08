import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counters.length != this.props.counters.length)
      console.log("Counters left - ", this.props.counters.length); //Number of counters left displayed when component is updated
  }
  render() {
    console.log("Counters - Rendered");
    const { onReset, counters, onDelete, onIncrement, onReduce } = this.props;
    return (
      <div>
        <br />
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReduce={onReduce}
            counter={counter}
          />
        ))}
        <br />
        <br />
      </div>
    );
  }
}

export default Counters;
