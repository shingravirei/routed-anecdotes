import React from 'react';

const Menu = () => {
    const padding = {
        paddingRight: 5
    };
    return (
        <div>
            <a href="google.com" style={padding}>
                anecdotes
            </a>
            <a href="google.com" style={padding}>
                create new
            </a>
            <a href="google.com" style={padding}>
                about
            </a>
        </div>
    );
};

export default Menu;
