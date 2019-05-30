import React from 'react';
import ReactDOM from 'react-dom';

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