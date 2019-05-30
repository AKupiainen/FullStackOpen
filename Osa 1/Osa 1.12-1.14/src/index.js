import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({anecdote, votes}) => 
(
    <div>
        <div>{anecdote}</div>
        <div>has {votes} votes</div>
    </div>
)

const anecdotes =
[
    {anecdote:  'If it hurts, do it more often', votes: 0},
    {anecdote: 'Adding manpower to a late software project makes it later!', votes: 0},
    {anecdote:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
    {anecdote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
    {anecdote:'Premature optimization is the root of all evil.', votes: 0},
    {anecdote:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0}
]

class Anecdotes extends React.Component
{
    state = 
    {
        selected: 0,
        mostVoted: 0
    }

    NextAnecdote = () =>
    {
        this.FindBiggestNumber()
        this.setState({selected: Math.floor(Math.random() * anecdotes.length)})
    }

    Vote = () =>
    {
        anecdotes[this.state.selected].votes++; 
        this.FindBiggestNumber()            
        this.forceUpdate();
    }

    FindBiggestNumber  = () =>
    {
        let mostVotes = anecdotes[0]
        let index = 0

        anecdotes.forEach(function (item, i, array)
        {
            if (item.votes > mostVotes.votes) 
            {
                mostVotes = item
                index = i
            }
        })

        this.setState({mostVoted: index})
    }

    render() {

        return (

            <div>
                <div>
                    <Anecdote anecdote={anecdotes[this.state.selected].anecdote} votes={anecdotes[this.state.selected].votes}></Anecdote>   
                </div>
                <div>
                    <button onClick={this.Vote}>Vote</button>
                    <button onClick={this.NextAnecdote}>Next Anecdote</button>
                </div>
                <div>
                    <h4>Most popular anecdote</h4>
                    <Anecdote anecdote={anecdotes[this.state.mostVoted].anecdote} votes={anecdotes[this.state.mostVoted].votes}></Anecdote> 
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Anecdotes/>, document.getElementById('root'))