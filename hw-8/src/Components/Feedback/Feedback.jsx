import React, { Component } from "react";
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

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  PlusGood = () => {
    this.setState({ good: this.state.good + 1 });
  }

  PlusNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  }

  PlusBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  }

  CountTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  CountPositiveFeedback = () => {
    const total = this.CountTotal();
    const positive = this.state.good;
    if (total === 0) return 0;
    return Math.round((positive / total) * 100);
  };

  render() {
    return (
      <>     
        <h1>Please leave feedback</h1>
        <BtnsContainer>
          <BtnsItem>
            <Buttons onClick={this.PlusGood}>Good</Buttons>
          </BtnsItem>
          <BtnsItem>
            <Buttons onClick={this.PlusNeutral}>Neutral</Buttons>
          </BtnsItem>
          <BtnsItem>
            <Buttons onClick={this.PlusBad}>Bad</Buttons>
          </BtnsItem>
        </BtnsContainer>
        <h2>Statistics</h2>

        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.CountTotal()}</p>
        <p>Positive Feedback: {this.CountPositiveFeedback()}%</p>
      </>
    );
  }
}

export default Feedback;