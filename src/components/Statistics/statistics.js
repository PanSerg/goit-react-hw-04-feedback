import React from "react";
import PropTypes from 'prop-types'
import { DataStat } from "./statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
    return (
    <DataStat>
      <li>
        <h3>Good: {good}</h3>
      </li>
      <li>
        <h3>Neutral: {neutral}</h3>
      </li>
      <li>
        <h3>Bad: {bad}</h3>
      </li>
      <li>
        <h3>Total: {total}</h3>
      </li>
      <li>
        <h3>Positive feedback: {positivePercentage}%</h3>
      </li>
        </DataStat>
    );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};