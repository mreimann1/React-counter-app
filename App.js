import React from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

const SIZE = 4;
/** TODO add way to dynamically change original amount of counters based on SIZE */
class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  /** logs to console when app reaches this lifecycle hook */
  componentDidMount() {
    // can do Ajax call here IE connect to backend
    console.log("App - Mounted");
  }

  /** increments value in counter */
  handleIncrement = counter => {
    const counters = [...this.state.counters]; //clones this array
    const index = counters.indexOf(counter); //gets index of counter to inc
    counters[index] = { ...counter }; // ?
    counters[index].value++;
    this.setState({ counters });
  };

  /** reduces value in counter */
  handleReduce = counter => {
    const counters = [...this.state.counters]; //clones this array
    const index = counters.indexOf(counter); //gets index of counter to inc
    counters[index] = { ...counter }; // ?
    if (counters[index].value > 0) counters[index].value--;
    this.setState({ counters });
  };

  /** sets value in counter to zero */
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  /** TODO add function that resets all counters to starting number of counters */
  handleResetAll = () => {};

  /** deletes a counter */
  handleDelete = counterId => {
    //creates a new array without the deleted counter
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onReduce={this.handleReduce}
            onDelete={this.handleDelete}
          />
        </main>{" "}
      </React.Fragment>
    );
  }
}

export default App;
