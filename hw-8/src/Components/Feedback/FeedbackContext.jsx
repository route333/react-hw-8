import React, { createContext, useContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const PlusGood = () => setGood(good + 1);
  const PlusNeutral = () => setNeutral(neutral + 1);
  const PlusBad = () => setBad(bad + 1);

  const CountTotal = () => good + neutral + bad;

  const CountPositiveFeedback = () => {
    const total = CountTotal();
    if (total === 0) return 0;
    return Math.round((good / total) * 100);
  };

  return (
    <FeedbackContext.Provider
      value={{
        good,
        neutral,
        bad,
        PlusGood,
        PlusNeutral,
        PlusBad,
        CountTotal,
        CountPositiveFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  return useContext(FeedbackContext);
};