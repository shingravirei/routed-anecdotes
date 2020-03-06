import React from 'react';

const Anecdote = ({ anecdote }) => {
    return (
        <div>
            <h3>
                {anecdote.content} by {anecdote.author}
            </h3>
            <p>has {anecdote.votes} votes</p>
            <p>
                for more info click{' '}
                <a href={`http://${anecdote.info}`}>here!</a>
            </p>
        </div>
    );
};

export default Anecdote;
