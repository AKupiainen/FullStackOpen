import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({title}) =>
(
    <h1>{title}</h1>
)

const Part = ({part, assignments}) =>
(
    <p>{part} {assignments}</p>
)

const Content = ({parts}) => 
{
    <ul>
        {parts.map(part => 
        (
            <li><Part key={part.part} part={part.name} assignments={part.assignments}/></li>
        ))}
    </ul>
}

const Total = ({parts}) =>
(
    <h3>Yhteensä {parts.map(part => part.assignments).reduce((p, n) => p + n)} tehtävää</h3>
)

const App = () => 
{
    const course = 
    {
        name: 'Half Stack -sovelluskehitys',
        parts: 
        [
            {
                name: 'Reactin perusteet',
                assignments: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                assignments: 7
            },
            {
                name: 'Komponenttien tila',
                assignments: 14
            }
        ]
    }

    return (
        <div>
            <Header title={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));