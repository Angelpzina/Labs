import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <h3>{counter}</h3>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};