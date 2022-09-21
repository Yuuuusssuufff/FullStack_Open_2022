import React, { useState } from "react";

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <div>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={all} />
      <StatisticLine text={"average"} value={average} />
      <StatisticLine text={"positive"} value={`${positive}%`} />
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <table >
      <tbody>
        <tr>
          <td style={{width: "5rem"}}>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};
const Buttons = ({ handleGood, handleBad, handleNeutral }) => {
  return [
    <button onClick={handleGood}>good</button>,
    <button onClick={handleNeutral}>neutral</button>,
    <button onClick={handleBad}>bad</button>,
  ];
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let average = 0;
  let positive = 0;
  const handleGood = () => {
    setGood(good + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const all = good + neutral + bad;

  average = (good - bad) / all;

  positive = (good / all) * 100;
  return (
    <div>
      <h1>give feedback</h1>
      <Buttons
        handleGood={handleGood}
        handleBad={handleBad}
        handleNeutral={handleNeutral}
      />
      <h1>feedback</h1>

      {all ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          all={all}
          positive={positive}
          average={average}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}

export default App;
