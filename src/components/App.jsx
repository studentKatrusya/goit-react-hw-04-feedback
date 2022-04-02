// import Feedback from './Feedback/Feedback';
import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackButton = ['Good', 'Neutral', 'Bad'];

  const heandleIncrement = e => {
    const name = e.currentTarget.innerText;

    switch (name) {
      case 'Good':
        setGood(good + 1);
        break;
      case 'Neutral':
        setNeutral(neutral + 1);
        break;
      case 'Bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positive = Math.floor((good * 100) / countTotalFeedback());
    return positive;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackButton}
          onLeaveFeedback={heandleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

// function App() {
//   // state = {
//   //   good: 0,
//   //   neutral: 0,
//   //   bad: 0,
//   // };

//   const [state, setState] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });
//   const onLeaveFeedback = option => {
//     setState(prev => ({
//       ...prev,
//       [option]: prev[option] + 1,
//     }));
//   };
//   const countTotalFeedback = () => {
//     const { good, neutral, bad } = state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     // const { good } = this.state;
//     const total = countTotalFeedback();
//     const positiveFeedback = Math.floor((good * 100) / total);
//     return positiveFeedback;
//   };

//   const { good, neutral, bad } = state;
//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Object.keys(state)}
//           onLeaveFeedback={onLeaveFeedback}
//         />
//       </Section>
//       <Section title="Statistics">
//         {countTotalFeedback() ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           ></Statistics>
//         ) : (
//           <Notification message="No feedback given" />
//         )}
//       </Section>
//     </>
//   );
// }

// export default App;
