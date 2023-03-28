import {useState } from 'react';

import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics"
import { Section } from "components/Section/Section"
import { Notification } from "components/Notification/Notification"
import css from "components/App.module.css"

export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    
    switch (e.target.textContent) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      case 'neutral':
        setNeutral(prevState =>prevState + 1)
        break;
      case 'bad':
        setBad(prevState => prevState + 1) 
        break; 
      default:
        return;
    }
  };

  const total = (good + neutral + bad)

  const countPositiveFeedbackPercentage = Math.round(good / total * 100)

  return(
    <>
    <div className={css.container_main}>
    <Section title="Please leave feedback">
    <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}/>
    </Section>
    <Section title="Statistics">
      {total > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={countPositiveFeedbackPercentage}/>) :
      (<Notification message="There is no feedback"/>)}
    </Section>
    
    </div></>
  );
} 


