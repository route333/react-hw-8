import './App.css';
import Feedback from './Components/Feedback/Feedback';
import React from 'react';
import { FeedbackProvider } from './Components/Feedback/FeedbackContext'; 



function App() {
  return (
    <div className="App">
      <FeedbackProvider>
      <Feedback />
    </FeedbackProvider>
    </div>
  );
}

export default App;
