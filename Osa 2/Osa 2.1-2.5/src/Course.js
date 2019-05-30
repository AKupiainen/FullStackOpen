import React from 'react';

const Header = ({title}) =>
(
    <h1>{title}</h1>
)

const Part = ({part, assignments}) =>
(
    <p>{part} {assignments}</p>
)

const Content = ({parts}) => 
(
    parts.map(part =>
    (
        <Part key={part.part} part={part.name} assignments={part.assignments}/>
    ))
)

const Total = ({parts}) =>
(
    <h3>Yhteensä {parts.map(part => part.assignments).reduce((p, n) => p + n)} tehtävää</h3>
)

const Course = ({course}) => 
(
    <div>
        <Header title={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
)

export default Course;