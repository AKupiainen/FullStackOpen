import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const Button = ({name, onClick}) =>
(
    <button name={name} onClick={onClick}>{name}</button>
)

const Statistic = ({name, value}) => 
(
    <tr>
        <td>{name}</td>
        <td>{value}</td>
    </tr>
)

const Statictics = (props) =>
{
    const total = props.good + props.bad + props.neutral
    const overall = (1 * props.good) - (1 * props.bad)
    const avarage = Math.abs((overall / total) * 100).toFixed(0) 
    const goodOverall = Math.abs(props.good / total * 100).toFixed(0)

    if (total === 0)
    {
        return <h1>No Feedback given</h1>
    }

    else
    {
        return (
            <div>
                <h1>Statictics</h1>
                <table>
                    <tbody>
                        <Statistic name="Good" value={props.good}></Statistic>
                        <Statistic name="Neutral" value={props.neutral}></Statistic>
                        <Statistic name="Bad" value={props.bad}></Statistic>     
                        <Statistic name="Overall Feedback" value={total}></Statistic>
                        <Statistic name="Avarage" value={avarage.toString()}></Statistic>
                        <Statistic name="Good Overall" value={goodOverall.toString()}></Statistic>
                    </tbody>
                </table>
            </div> 
        )
    }
}

const App = () => 
{
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const props = {good, neutral, bad}

    return (
        <div>
            <h2>Give Feedback!</h2>
            <Button name="Good" onClick={() => setGood(good + 1)}></Button>
            <Button name="Neutral" onClick={() => setNeutral(neutral + 1)}></Button>
            <Button name="Bad" onClick={() => setBad(bad + 1)}></Button>
            <Statictics {...props} ></Statictics>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));