import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr>
    <td> {props.text} </td>
    <td> {props.value} {props.text2} </td>
  </tr>
)

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }

  const average = (((good * 1) + (neutral * 0) + (bad * (-1))) / total).toFixed(1)
  const positive = ((good / total) * 100).toFixed(1)

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} text2="%" />
        </tbody>
      </table>
    </div>
  )
}



const App = () => {


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => setGood(good + 1)
  const setToNeutral = () => setNeutral(neutral + 1)
  const setToBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>
          Give Feedback
      </h2>
      <Button handleClick={setToGood} text="GOOD" />
      <Button handleClick={setToNeutral} text="NEUTRAL" />
      <Button handleClick={setToBad} text="BAD" />
      <h2>
        <p>
          Statistics
        </p>
      </h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App



// SEURAAVAKSI: 1. Lue uudestaan 1.d läpi ja sovella samalla tehtävänantoa materiaaliin 
// 2. Tee 1.6 eteenpäin vaiheittain