import React, { Component } from "react";
import {useState} from "react";
import styled from "styled-components";

const BtnsContainer = styled.ul`
  display: flex;
  justify-content:center;
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
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

   const PlusGood = () => {
    setGood(good + 1);
  }

  const PlusNeutral = () => {
    setNeutral(neutral + 1)
  }

  const PlusBad = () => {
    setBad(bad + 1);
  }

 const CountTotal = () => {
        return good + neutral + bad;
      }

  const CountPositiveFeedback = () => {
        const total = CountTotal();
        const positive = good;
        if (total === 0) return 0;
        return Math.round((positive / total) * 100);
      };

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

}


export default Feedback;