import React from "react";
import { useFeedback } from "./FeedbackContext";
import styled from "styled-components";

const BtnsContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const BtnsItem = styled.li`
  list-style: none;
  margin: 0 10px;
`;

const Buttons = styled.button`
  border: solid 1px grey;
  border-radius: 5px;
  color: black;
  cursor: pointer;

  :hover {
    background-color: #f0f0f0;
  }
`;

const Feedback = () => {
  const {
    good,
    neutral,
    bad,
    PlusGood,
    PlusNeutral,
    PlusBad,
    CountTotal,
    CountPositiveFeedback,
  } = useFeedback();

  return (
    <>
      <h1>Please leave feedback</h1>
      <BtnsContainer>
        <BtnsItem>
          <Buttons onClick={PlusGood}>Good</Buttons>
        </BtnsItem>
        <BtnsItem>
          <Buttons onClick={PlusNeutral}>Neutral</Buttons>
        </BtnsItem>
        <BtnsItem>
          <Buttons onClick={PlusBad}>Bad</Buttons>
        </BtnsItem>
      </BtnsContainer>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {CountTotal()}</p>
      <p>Positive Feedback: {CountPositiveFeedback()}%</p>
    </>
  );
};

export default Feedback;