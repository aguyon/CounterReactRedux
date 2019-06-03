import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  light: state
});

const CounterContainer = ({ light, dispatch }) => (
  <div>
    <p>{light}</p>
    <button
      onClick={() => dispatch({ type: 'ADD' })}
    >
      +1
    </button>
  </div>
);

export default connect(
  mapStateToProps
)(CounterContainer);