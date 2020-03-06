import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AnecdoteList from './AnecdoteList';
import About from './About';
import Footer from './Footer';
import CreateNew from './CreateNew';
import Anecdote from './Anecdote';

const App = () => {
    const [anecdotes, setAnecdotes] = useState([
        {
            content: 'If it hurts, do it more often',
            author: 'Jez Humble',
            info:
                'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
            votes: 0,
            id: '1'
        },
        {
            content: 'Premature optimization is the root of all evil',
            author: 'Donald Knuth',
            info: 'http://wiki.c2.com/?PrematureOptimization',
            votes: 0,
            id: '2'
        }
    ]);

    const [notification, setNotification] = useState(null);

    useEffect(() => {
        if (notification) {
            setTimeout(() => {
                setNotification(null);
            }, 3000);
        }
    }, [notification, setNotification]);

    const addNew = anecdote => {
        anecdote.id = (Math.random() * 10000).toFixed(0);
        setAnecdotes(anecdotes.concat(anecdote));
    };

    const anecdoteById = id => anecdotes.find(a => a.id === id);

    const vote = id => {
        const anecdote = anecdoteById(id);

        const voted = {
            ...anecdote,
            votes: anecdote.votes + 1
        };

        setAnecdotes(anecdotes.map(a => (a.id === id ? voted : a)));
    };
    const padding = { padding: 5 };

    return (
        <div>
            <h1>Software anecdotes</h1>
            <Router>
                <div>
                    <div>
                        <Link style={padding} to="/">
                            Anecdotes
                        </Link>
                        <Link style={padding} to="/create">
                            Create New
                        </Link>
                        <Link style={padding} to="/about">
                            About
                        </Link>
                    </div>
                    {notification && <p>{notification}</p>}
                    <div>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <AnecdoteList
                                    anecdotes={anecdotes}
                                    vote={vote}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/create"
                            render={() => (
                                <CreateNew
                                    addNew={addNew}
                                    setNotification={setNotification}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/anecdote/:id"
                            render={({ match }) => (
                                <Anecdote
                                    anecdote={anecdoteById(match.params.id)}
                                />
                            )}
                        />
                        <Route exact path="/about" render={() => <About />} />
                    </div>
                </div>
            </Router>

            <Footer />
        </div>
    );
};

export default App;
