import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actionCreators";
function App({ count, increment, decrement, reset }) {
  return (
    <div className="App">
      <h2>Counter</h2>
      <div className="Counter">
        <h2>{count}</h2>
        <button onClick={increment}>increase</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrement}>decrease</button>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    count: state.count
  };
};
const mapDispatchToProps = {
  increment: increment,
  decrement: decrement,
  reset: reset
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
